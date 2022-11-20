const getConnection = require("./getConnection")

async function executeAdvancedQueries() {
    let connection;
    let output = []
    try{
        connection = await getConnection()
        let data = await connection.execute(
            `select studentName, courseId, sectionNum
            From student s, enrolls_in e
            Where courseId = 'CPS510'
                And sectionNum = 1
                And s.studentId = e.studentId`
        )

        output.push(data.rows)

        data = await connection.execute(
            `select studentName, se.sectionNum, se.courseId, instructorName
            From student s, section se, enrolls_in e, instructor i
            Where se.instructorId = 1
                And i.instructorId = se.instructorId
                And se.courseId = e.courseId
                And se.sectionNum = e.sectionNum
                And s.studentId = e.studentId`
        )

        output.push(data.rows)

            
        data = await connection.execute(
            `select studentName, se.sectionNum, se.courseId
            From student s, section se, enrolls_in e, instructor i
            Where i.instructorName = 'Abhari'
                And i.instructorId = se.instructorId
                And se.courseId = e.courseId
                And se.sectionNum = e.sectionNum
                And s.studentId = e.studentId
                Order by studentName`
        )

        output.push(data.rows)

        data = await connection.execute(
            `select studentName, courseId, sectionNum
            From student s, placed_on p
            Where s.studentId = 501841821
                And s.studentId = p.studentId`
        )

        output.push(data.rows)

        data = await connection.execute(
            `select se.courseId, sectionNum, courseTitle, courseDescription, instructorName
            From section se, instructor i, course c
            Where se.instructorId = i.instructorId
                And c.courseId = se.courseId`
        )

        output.push(data.rows)

        data = await connection.execute(
            `select courseId, sectionNum, Count(*) As Number_enrolled
            From enrolls_in e
            Where courseId = 'CPS510' and sectionNum = 1
            Group by courseId, sectionNum`
        )

        output.push(data.rows)

        data = await connection.execute(
            `select due_date, studentName, date_paid, Sum(c.price) as Amount
            From invoice i, student s, course c, enrolls_in e
            Where s.studentId = 500747921
                And i.studentId = s.studentId
                And e.studentId = s.studentId
                And c.courseId = e.courseId
            Group by due_date, studentName, date_paid`
        )

        output.push(data.rows)

        data = await connection.execute(
            `
            select courseId, sectionNum, Count(*) As numPeopleOnWaitlist
            From placed_on
            Where courseId = 'CPS510' and sectionNum = 1
            Group By courseId, sectionNum`
        )

        output.push(data.rows)

        return(output)
    } catch(err){
        console.log(err)
    } finally {
        await connection.close()
    }
} 

module.exports = {
    executeAdvancedQueries
}