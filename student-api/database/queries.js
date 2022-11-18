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
            `SELECT s.courseId, s.sectionNum, courseTitle, instructorName, scheduledDay, scheduledTime, sectionLocation
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

module.exports = {
    getStudent,
    getCoursesOffered,
    getEnrolledCourses,
    getCoursesWaitlistedFor,
    getStudentTuition
}