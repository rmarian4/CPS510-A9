const getConnection = require("./getConnection")

async function dropDBTables() {
    let connection
    try{
        connection = await getConnection()
        
        await connection.execute(
            `DROP TABLE section_location`
        )

        await connection.execute(
            `DROP TABLE placed_on`
        )

        await connection.execute(
            `DROP TABLE enrolls_in`
        )

        await connection.execute(
            `DROP TABLE section`
        )

        await connection.execute(
            `DROP TABLE instructor`
        )

        await connection.execute(
            `DROP TABLE department`
        )

        await connection.execute(
            `DROP TABLE course`
        )

        await connection.execute(
            `DROP TABLE invoice`
        )

        await connection.execute(
            `DROP TABLE student`
        )

        await connection.execute(
            `DROP TABLE university`
        )

        await connection.execute(
            `DROP TABLE city_province`
        )

    } catch(err){
        console.log(err)
    } finally {
        await connection.close()
    }
}

module.exports = {
    dropDBTables
}