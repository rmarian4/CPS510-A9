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

module.exports = {
    getStudent
}