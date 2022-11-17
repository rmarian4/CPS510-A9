const oracledb = require("oracledb")
oracledb.initOracleClient({libDir: 'C:\\instantclient_11_2'});
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const getConnection = async () => await oracledb.getConnection({
    user: 'USERNAME',
    password: 'PASSWORD',
    connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle.scs.ryerson.ca) (Port=1521))(CONNECT_DATA=(SID=orcl)))"
});

module.exports = getConnection