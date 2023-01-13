var express = require('express');
var router = express.Router();
var mysql = express.mysql();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_hms",
  });

router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });
});    

router.post('/', (req, res, next) => {
    let department_id = req.body.department_id;
    let department_name = req.body.department_name;
    let department_description = req.body.department_description;
    let strquery = `UPDATE tblcourse SET department_name='${department_name}',
    department_description='${department_description}' where courseid='${courseid}'`;
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({message:'Success'})
    });
    });
module.exports = router;
