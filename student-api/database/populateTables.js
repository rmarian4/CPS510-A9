const getConnection = require("./getConnection")

async function populateDBTables() {
    let connection;
    try{
        connection = await getConnection()

        await connection.execute(
            `Insert into city_province values('Toronto', 'Ontario')`
        )
        await connection.execute(
            `Insert Into university Values ('Toronto Metropolitan University', 'Victoria St', 350, Null, 'Toronto', 'M5B2K3')`
        )
        await connection.execute(
            `Insert Into student Values (500747921, 'roberto.mariani', 'roberto.mariani@ryerson.ca', 'Toronto Metropolitan University', 'Roberto Mariani')`
        )
        await connection.execute(
            `Insert Into student Values (500847821, 'auston.matthews', 'auston.matthews@ryerson.ca', 'Toronto Metropolitan University', 'Auston Matthews')`
        )
        await connection.execute(
            `Insert Into student Values (500947721, 'morgon.rielly', 'morgan.rielly@ryerson.ca', 'Toronto Metropolitan University','Morgon Rielly')`
        )
        await connection.execute(
            `Insert Into student Values (501741721, 'william.nylander', 'william.nylander@ryerson.ca', 'Toronto Metropolitan University', 'William Nylander')`
        )
        await connection.execute(
            `Insert Into student Values (501841821, 'fred.vanvleet', 'fred.vanvleet@ryerson.ca', 'Toronto Metropolitan University', 'Fred VanVleet')`
        )
        await connection.execute(
            `Insert Into student Values (500821821, 'lebron.james', 'lebron.james@ryerson.ca', 'Toronto Metropolitan University','Lebron James')`
        )
        await connection.execute(
            `Insert Into invoice Values (1,to_date('2022-12-25', 'YYYY-MM-DD'), 500747921, null)`
        )
        await connection.execute(
            `Insert Into invoice Values (2,to_date('2022-12-25', 'YYYY-MM-DD'), 500847821, null)`
        )
        await connection.execute(
            `Insert Into invoice Values (3,to_date('2022-12-25', 'YYYY-MM-DD'), 500947721, null)`
        )
        await connection.execute(
            `Insert Into invoice Values (4,to_date('2022-12-25', 'YYYY-MM-DD'), 501741721, null)`
        )
        await connection.execute(
            `Insert Into invoice Values (5,to_date('2022-12-25', 'YYYY-MM-DD'), 501841821, null)`
        )
        await connection.execute(
            `Insert Into invoice Values (6,to_date('2022-12-25', 'YYYY-MM-DD'), 500821821, null)`
        )
        await connection.execute(
            `Insert Into course Values ('CPS510', 'Database Systems I', 'Learn about database system and SQL', 750)`
        )
        await connection.execute(
            `Insert Into course Values ('CPS633', 'Computer Security', 'Learn about computer security', 750)`
        )
        await connection.execute(
            `Insert Into department Values (1, 'Computer Science')`
        )
        await connection.execute(
            `Insert Into instructor Values (1, 'Abhari', 'aabhari@cs.ryerson.ca', 1)`
        )
        await connection.execute(
            `Insert Into instructor Values (2, 'Tajali', 'tajali@cs.ryerson.ca', 1)`
        )
        await connection.execute(
            `Insert Into instructor Values (3, 'Woungang', 'woungang@cs.ryerson.ca', 1)`
        )
        await connection.execute(
            `Insert Into section Values ('CPS510', 1, 2, 5,1)`
        )
        await connection.execute(
            `Insert Into section Values ('CPS510', 2, 2, 5,2)`
        )
        await connection.execute(
            `Insert Into section Values ('CPS633', 1, 5, 5,3)`
        )
        await connection.execute(
            `Insert Into enrolls_in Values (500747921, 1, 'CPS510')`
        )
        await connection.execute(
            `Insert Into enrolls_in Values (500847821, 1, 'CPS510')`
        )
        await connection.execute(
            `Insert Into enrolls_in Values (500947721, 2, 'CPS510')`
        )
        await connection.execute(
            `Insert Into enrolls_in Values (501741721, 2, 'CPS510')`
        )
        await connection.execute(
            `Insert Into enrolls_in Values (500747921, 1, 'CPS633')`
        )
        await connection.execute(
            `Insert Into enrolls_in Values (500847821, 1, 'CPS633')`
        )
        await connection.execute(
            `Insert Into enrolls_in Values (500947721, 1, 'CPS633')`
        )
        await connection.execute(
            `Insert Into enrolls_in Values (501741721, 1, 'CPS633')`
        )
        await connection.execute(
            `Insert Into enrolls_in Values (501841821, 1, 'CPS633')`
        )
        await connection.execute(
            `Insert Into placed_on Values (501841821, 1, 'CPS510', current_timestamp)`
        )
        await connection.execute(
            `Insert Into placed_on Values (500821821, 2, 'CPS510', current_timestamp)`
        )
        await connection.execute(
            `Insert Into placed_on Values (500821821, 1, 'CPS633', current_timestamp)`
        )
        await connection.execute(
            `Insert into section_location values('CPS510', 1, 'Yonge Dundas Square 02', 'Wednesday', 10)`
        )
        await connection.execute(
            `Insert into section_location values('CPS510', 1, 'Engineering Building 103', 'Friday', 16)`
        )
        await connection.execute(
            `Insert into section_location values('CPS510', 2, 'Library Building 072', 'Tuesday', 10)`
        )
        await connection.execute(
            `Insert into section_location values('CPS510', 2, 'Library Building 072', 'Thursday', 16)`
        )
        await connection.execute(
            `Insert into section_location values('CPS633', 1, 'Engineering Building 103', 'Tuesday', 16)`
        )
        await connection.execute(
            `Insert into section_location values('CPS633', 1, 'Engineering Building 103', 'Thursday', 17)`
        )
    } catch (err) {
        console.log(err)
    } finally {
        await connection.close()
    }
}

module.exports = {
    populateDBTables
}