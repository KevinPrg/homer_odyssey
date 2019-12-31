const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SC//eh790",
  database: "homer"
});
module.exports = connection;
