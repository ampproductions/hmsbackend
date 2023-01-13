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

    let username=req.body.username;
    let password=req.body.password;

    let query = `SELECT * FROM tbl_adminlogin WHERE admin_username='${username}' and admin_password='${password}'`;

con.query(query,(err,result)=>{
    if(err){console.log(err);}
    res.send(result)
});
})

module.exports = router;


