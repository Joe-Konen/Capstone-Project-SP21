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

app.listen(3001);