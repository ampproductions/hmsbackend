var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_hms"
});
/* GET users listing. */
router.post('/', (req, res, next)=> {
    
    let strquery = 'INSERT INTO tbl_department (department_name,department_description) VALUES (?,?)';
    
    let department_name=req.body.department_name;
    let department_description=req.body.department_description;


con.query(strquery,[department_name, department_description]);
});


module.exports = router;


