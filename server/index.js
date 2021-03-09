const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

//const bcrypt = require('bcrypt');
//const saltRounds = 10;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const e = require("express");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

//var logged = username;
//console.log(logged);

app.use(session({
    key: "userID",
    secret: "jobsquirrel",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}));

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

app.post("/Login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.getConnection(function(err, connection){

        db.query(
            "SELECT * FROM Employer WHERE emp_username = ? AND emp_password = ?",
            [username, password],
            (err, result) => {
                if(result.length > 0){
                    req.session.user = result
                    res.send("You are logged in as an employer");
                    const emp = JSON.stringify({
                        username,
                        password,
                    })
                    console.log(emp);
                    return;
                }
                if(!err){
                    db.query("SELECT * FROM Student WHERE stu_username = ? AND stu_password = ?",
                    [username, password],
                    (err, result) => {
                        if(result.length > 0){
                            req.session.user = result
                            res.send("You are logged in as a student");
                            const stu = JSON.stringify({
                                username,
                                password,
                            })
                            console.log(stu)
                            return;
                        }else{
                            res.send("Login incorrect, try again.")
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