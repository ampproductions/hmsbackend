var express = require("express");
var router = express.Router();
var mysql = express.Router();
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_hms",
});

router.post('/', (req, res, next) => {
  let department_id = req.body.id;
  let query = `SELECT * FROM tbl_department where department_id='${id}'`;
    con.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
    });
    });

module.exports = router;
