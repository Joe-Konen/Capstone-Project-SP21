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

app.listen(3001);