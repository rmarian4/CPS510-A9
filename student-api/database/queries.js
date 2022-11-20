const getConnection = require("./getConnection")

async function getStudent(studentId) {
    let connection;
    try {
        connection = await getConnection()
        const data = await connection.execute(
            `Select * from student where studentId = ${studentId}`
        );

        return data.rows
    } catch (err) {
        console.log(err)
    } finally {
        await connection.close()
    }
}

async function getCoursesOffered() {
    let connection;
    try {
        connection = await getConnection()
        const data = await connection.execute(
            `SELECT s.courseId, s.sectionNum, courseTitle, instructorName, scheduledDay, scheduledTime, sectionLocation, sectionCapacity, waitListCapacity
            FROM course c, section s, section_location sel, instructor i
            WHERE s.courseId = c.courseId
                AND s.courseId = sel.courseId
                AND s.sectionNum = sel.sectionNum
                And s.instructorId = i.instructorId`
        );
        return data.rows
    } catch(err){
        console.log(err)
    } finally{
        await connection.close()
    }
}

async function getEnrolledCourses(studentId) {
    let connection;
    try{
        connection = await getConnection()
        const data = await connection.execute(
            `SELECT e.courseId, e.sectionNum, courseTitle, instructorName, scheduledDay, scheduledTime, sectionLocation
            FROM enrolls_in e, course c, section s, section_location sel, instructor i
            WHERE e.studentId = ${studentId}
                And e.courseId = c.courseId
                And e.courseId = s.courseId
                And e.sectionNum = s.sectionNum
                And s.instructorId = i.instructorId
                And e.courseId = sel.courseId
                And e.sectionNum = sel.sectionNum`
        );
        return data.rows
    } catch(err){
        console.log(err)
    } finally{
        await connection.close()
    }
}

async function getCoursesWaitlistedFor(studentId) {
    let connection;
    try{
        connection = await getConnection()
        const data = await connection.execute(
            `SELECT p.courseId, p.sectionNum, courseTitle, instructorName, scheduledDay, scheduledTime, sectionLocation
            FROM placed_on p, course c, instructor i, section_location sel, section s
            WHERE p.studentId = ${studentId}
                AND p.courseId = c.courseId
                AND p.courseId = s.courseId
                AND p.sectionNum = s.sectionNum
                AND s.instructorId = i.instructorId
                AND p.courseId = sel.courseId
                AND p.sectionNum = sel.sectionNum`
        );
        return data.rows
    } catch(err){
        console.log(err)
    } finally{
        await connection.close()
    }
}

async function getStudentTuition(studentId) {
    let connection;
    try{
        connection =await getConnection()
        const data = await connection.execute(
            `SELECT invoiceId, due_date, date_paid, SUM(Price) as amount
            FROM invoice i, student s, enrolls_in e, course c
            WHERE s.studentId = ${studentId}
                AND s.studentId = e.studentId
                AND s.studentId = i.studentId
                AND e.courseId = c.courseId
            Group by invoiceId, due_date, date_paid`
        );
        return data.rows
    } catch(err){
        console.log(err)
    } finally{
        await connection.close()
    }
}

async function dropCourse(studentId, courseId, sectionNum) {
    let connection;
    try{
        connection = await getConnection()
        const data = await connection.execute(
            `DELETE FROM enrolls_in
            WHERE studentId = ${studentId}
            AND courseId = '${courseId}'
            AND sectionNum = ${sectionNum}`
        )
        return data.rows
    } catch(err){
        console.log(err)
    } finally {
        await connection.close()
    }
}

async function removeCourseFromWaitlist(studentId, courseId, sectionNum) {
    let connection;
    try {
        connection = await getConnection()
        const data = await connection.execute(
            `DELETE FROM placed_on
            WHERE studentId = ${studentId}
            AND courseId = '${courseId}'
            AND sectionNum = ${sectionNum}`
        )
        return data.rows
    } catch(err){
        console.log(err)
    } finally {
        await connection.close()
    }
}

async function getNumPeopleEnrolledInCourse(connection, courseId, sectionNum) {
    try {
        const data = await connection.execute(
            `Select count(*) as total
            From enrolls_in
            Where courseId = '${courseId}' AND sectionNum = ${sectionNum}
            Group by courseId, sectionNum`
        )
        return data.rows
    } catch(err){
        console.log(err)
    }
}

async function getNumPeopleOnWaitlist(connection, courseId, sectionNum) {
    try {
        const data = await connection.execute(
            `Select count(*) as total
            From placed_on
            Where courseId = '${courseId}' AND sectionNum = ${sectionNum}
            Group by courseId, sectionNum`
        )
        return data.rows
    } catch(err){
        console.log(err)
    }
}

async function isInCourseDifferentSection(connection, studentId, courseId, sectionNum) {
    try {
        const data = await connection.execute(
            `select courseId, sectionNum 
            From enrolls_in e
            Where e.courseId = '${courseId}' AND e.studentId = ${studentId} AND e.sectionNum != ${sectionNum}`
        )
        return data.rows.length > 0
    } catch(err){
        console.log(err)
    }
}

async function isInCourse(connection, studentId, courseId) {
    try {
        const data = await connection.execute(
            `select courseId, sectionNum 
            From enrolls_in e
            Where e.courseId = '${courseId}' AND e.studentId = ${studentId}`
        )
        return data.rows.length > 0
    } catch(err){
        console.log(err)
    }
}

async function isCourseOnWaitlist(connection, studentId, courseId, sectionNum){
    try{
        const data = await connection.execute(
            `SELECT *
            FROM placed_on 
            WHERE studentId = ${studentId} AND courseId = '${courseId}' AND sectionNum = ${sectionNum}`
        )
        return data.rows.length > 0
    } catch(err) {
        console.log(err)
    }
}

async function enrollStudent(studentId, courseId, sectionNum, waitListCapacity, sectionCapacity) {
    let connection;
    try {
        connection = await getConnection();

        const amountEnrolledInCourse = await getNumPeopleEnrolledInCourse(connection, courseId, sectionNum);
        const amountOnWaitlist = await getNumPeopleOnWaitlist(connection, courseId, sectionNum);
        const inCourseDifferentSection = await isInCourseDifferentSection(connection, studentId, courseId, sectionNum);
        const courseOnWaitlist = await isCourseOnWaitlist(connection, studentId, courseId, sectionNum)

        if (courseOnWaitlist && (amountEnrolledInCourse.length === 0 || (amountEnrolledInCourse.length > 0 && amountEnrolledInCourse[0].TOTAL < sectionCapacity))){
            await removeCourseFromWaitlist(studentId, courseId, sectionNum)
            await connection.execute(`insert into enrolls_in values(${studentId}, ${sectionNum}, '${courseId}')`)
            return true
        }

        if (inCourseDifferentSection && (amountEnrolledInCourse.length === 0 || (amountEnrolledInCourse.length > 0 && amountEnrolledInCourse[0].TOTAL < sectionCapacity))) {
            const data = await connection.execute(
                `update enrolls_in
                set sectionNum = ${sectionNum}
                where studentId = ${studentId} AND courseId = '${courseId}'`
            )
            return true
        }
    
        //if space in course enroll student in course
        if (amountEnrolledInCourse.length === 0 || (amountEnrolledInCourse.length > 0 && amountEnrolledInCourse[0].TOTAL < sectionCapacity)) { 
            const data = await connection.execute(
                `insert into enrolls_in values(${studentId}, ${sectionNum}, '${courseId}')`
            )
            return true
        }
        const inCourse = await isInCourse(connection, studentId, courseId)
        //if course is full and there is space on the waitlist then place student on waitlist
        if ((!inCourse || inCourseDifferentSection) && amountEnrolledInCourse[0].TOTAL === sectionCapacity && (amountOnWaitlist.length === 0 || amountOnWaitlist[0].TOTAL < waitListCapacity)) {
            const data = await connection.execute(
                `insert into placed_on values(${studentId}, ${sectionNum}, '${courseId}', current_timestamp)`
            )
            return true
        }

        return false
    } catch(err){
        console.log(err)
    } finally {
        await connection.close()
    }
}

module.exports = {
    getStudent,
    getCoursesOffered,
    getEnrolledCourses,
    getCoursesWaitlistedFor,
    getStudentTuition,
    dropCourse,
    removeCourseFromWaitlist,
    getNumPeopleEnrolledInCourse,
    enrollStudent
}