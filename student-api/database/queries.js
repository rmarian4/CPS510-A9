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

module.exports = {
    getStudent,
    getCoursesOffered,
    getEnrolledCourses
}