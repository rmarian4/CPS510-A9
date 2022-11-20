const getConnection = require("./getConnection")

async function createDBTables() {
    let connection;
    try {
        connection = await getConnection();

        await connection.execute(
            `CREATE TABLE City_province (
                City varchar2(25) Primary Key,
                Province varchar2(25) not null
            )`
        )

        await connection.execute(
            `CREATE TABLE university (
                UniName varchar2(40),
                StreetName varchar2(25) NOT NULL,
                StreetNum number NOT NULL,
                UnitNum number,
                City varchar2(25) references City_Province(City),
                PostalCode varchar2(6) NOT NULL,
                PRIMARY KEY (UniName)
            )`
        )

        await connection.execute(
            `CREATE TABLE student (
                StudentId number,
                UserName varchar2(25) NOT NULL,
                Email varchar2(75) NOT NULL,
                UniName varchar2(40) REFERENCES university(UniName) ON DELETE CASCADE,
                StudentName varchar2(25) not null,
                PRIMARY KEY (StudentId)
            )`
        )

        await connection.execute(
            `CREATE TABLE invoice (
                InvoiceId number,
                Due_Date Date NOT NULL,
                StudentId number References student(StudentId) ON DELETE CASCADE,
                Date_Paid Date,
                PRIMARY KEY (InvoiceId)
            )`
        )

        await connection.execute(
            `Create Table course (
                CourseId varchar2(6),
                CourseTitle varchar2(25) Not Null,
                CourseDescription varchar2(300) Not Null,
                Price number Not Null,
                Primary Key (CourseId)
            )`
        )

        await connection.execute(
            `Create Table department (
                DepId number Primary Key,
                DepName varchar2(25) Not Null
            )`
        )

        await connection.execute(
            `Create Table instructor (
                InstructorId number Primary Key,
                InstructorName varchar2(25) Not Null,
                InstructorEmail varchar2(25) Not Null,
                DepId number References department(DepId)
            )`
        )

        await connection.execute(
            `Create Table section (
                CourseId varchar2(6) References course(CourseId) On Delete Cascade,
                SectionNum number,
                SectionCapacity number Not Null,
                WaitlistCapacity number Not Null,
                InstructorId number References instructor(InstructorId),
                Primary Key (CourseId, SectionNum)
            )`
        )

        await connection.execute(
            `Create Table enrolls_In (
                StudentId number References student(StudentId) On Delete Cascade,
                SectionNum number,
                CourseId varchar2(6),
                Primary Key (StudentId, SectionNum, CourseId),
                Foreign Key (CourseId, SectionNum) References section(CourseId, SectionNum) On Delete Cascade
            )`
        )

        await connection.execute(
            `Create Table placed_on (
                StudentId number References student(StudentId) On Delete Cascade,
                SectionNum number,
                CourseId varchar2(6),
                DateAdded Timestamp Not Null,
                Primary Key (StudentId, CourseId, SectionNum),
                Foreign Key (CourseId, SectionNum) References section(CourseId, SectionNum) On Delete Cascade
            )`
        )

        await connection.execute(
            `Create Table section_location (
                courseId varchar2(6),
                sectionNum number,
                sectionLocation varchar2(25),
                scheduledDay varchar2(10),
                scheduledTime number check (scheduledTime between 8 and 18),
                Primary Key (courseId, sectionNum, scheduledDay),
                Foreign Key (courseId, sectionNum) References section(courseId, sectionNum) on delete cascade)`
        )

       

    } catch(err) {
        console.log(err)
    } finally {
        await connection.close()
    }
}


module.exports = {
    createDBTables
}