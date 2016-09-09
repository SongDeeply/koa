/*mysql数据库模块*/
var _mysql = {};

//初始化连接
var conn = _mysql.conn = $mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'companydb'
});
conn.connect();

//导出模块
module.exports = _mysql;