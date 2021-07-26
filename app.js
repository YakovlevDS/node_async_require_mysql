const mysql = require("mysql2/promise");
const config = require("./config.js");

async function main() {
  const conn = await mysql.createConnection(config);
  const [rows, fields] = await conn.execute("select * from city where id=1");
  console.log(rows[0]);
  console.log(rows[0]["Name"]);
  await conn.execute('update city set Name="' + rows[0]["Name"] + '" where id=2');
  conn.end();

  return rows;
}
async function f() {
  let a = await main();
  console.log(a);
}

f();
