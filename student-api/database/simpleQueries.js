const getConnection = require("./getConnection")

async function executeSimpleQueries(){
    let output = [];
    let connection;
    try {
        connection = await getConnection()
        let data = await connection.execute(
            `select courseid from enrolls_in where studentid = 500747921`
        )

        output.push(data.rows)

        data = await connection.execute(
            `Select sectionlocation
            from section_location
            where CourseId = 'CPS510' and SectionNum = 1`
        )

        output.push(data.rows)

        data = await connection.execute(
            `Select instructorname
            from Instructor
            where InstructorId =1`
        )

        output.push(data.rows)

        data = await connection.execute(
            `Select courseid
            from placed_on
            where studentid = 500821821`
        )

        output.push(data.rows)

        data = await connection.execute(
            `select depname from department where depid = 1`
        )

        output.push(data.rows)

        data = await connection.execute(
            `select studentId, dateadded
            from placed_on
            where courseId = 'CPS510' and sectionNum = 1
            order by dateadded `
        )

        output.push(data.rows)

        return output
    } catch(err){
        console.log(err)
    } finally {
        await connection.close()
    }
}

module.exports = {
    executeSimpleQueries
}