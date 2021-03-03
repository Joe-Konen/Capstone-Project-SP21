const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { nextTick } = require("process");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    user: "JobsToDoS2021",
    host: "45.55.136.114",
    password: "jobsrus!",
    database: "JobsToDoS2021",
    multipleStatements: true,
});

db.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.post("/loginUser", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.getConnection(function(err, connection){

        db.query(
            "SELECT * FROM Employer WHERE emp_username = ? AND emp_password = ?",
            [username, password],
            (err, result) => {
                if(result.length > 0){
                    res.send("You are logged in as a employer");
                    return;
                }
                if(!err){
                    db.query("SELECT * FROM Student WHERE stu_username = ? AND stu_password = ?",
                    [username, password],
                    (err, result) => {
                        if(result.length > 0){
                            res.send("You are logged in as a student");
                            return;
                        }
                    }
                )}    
        })   
    });
})

app.post("/studentRegister", (req, res) => {
    const stuUsername = req.body.username;
    const stuPassword = req.body.password;
    const stuFName = req.body.fName;
    const stuLName = req.body.lName;
    const school = req.body.school;
    //const phone = req.body.phone;
    var stuAge = req.body.age;
    const stuEmail = req.body.email;

    age = parseInt(age);

    var values = [
        [stuFName, stuLName, school, stuAge, stuEmail, stuPassword, stuUsername]
    ];

    console.log(values[0]);

    db.query(
        "INSERT INTO Student (firstName, lastName, schoolName, age, email, stu_password, stu_username) VALUES (?)",
        values,
        function(err, rows, fields){
            if (err) throw err;
        });
    
        res.send("registered")
    });

app.post("/employerRegister", (req, res) => {
    const empUsername = req.body.username;
    const empPassword = req.body.password;
    const empFName = req.body.fName;
    const empLName = req.body.lName;
    const empAddress = req.body.address;
    //const phone = req.body.phone;
    const empEmail = req.body.email;
    
    var values = [
        [empFName, empLName, empAddress, empEmail, empPassword, empUsername]
    ];
    
    console.log(values[0]);
    
    db.query(
        "INSERT INTO Employer (firstName, lastName, address, email, emp_password, emp_username) VALUES (?)",
        values,
        function(err, rows, fields){
            if (err) throw err;
        });
        
        res.send("registered")
    });

app.listen(3001);