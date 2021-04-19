const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
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

const loggedInUser = {
    user: "",
    pass: ""
}

db.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected!");
})

app.post("/loginUser", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
})

app.get("/", (req,res) => {
    loggedInUser.user = "";
    loggedInUser.pass = "";
    console.log("Cleared out user");
})

app.get("/getStudent", (req, res) => {
    let username = loggedInUser.user;
    let password = loggedInUser.pass;
    let userInfo = [];
    db.query(
        "SELECT * FROM Student WHERE stu_username = ? AND stu_password = ?",
        [username, password],
        (err, result, fields) => {
            if(err) throw err;
            console.log("grabbing user");
            userInfo.push(result[0].stu_username);
            userInfo.push(result[0].stu_password);
            userInfo.push(result[0].email);
            userInfo.push(result[0].age);
            userInfo.push(result[0].firstName);
            userInfo.push(result[0].lastName);
            userInfo.push(result[0].schoolName);
            res.send(userInfo);
        }
    )
})

app.get("/getEmployer", (req, res) => {
    let username = loggedInUser.user;
    let password = loggedInUser.pass;
    let userInfo = [];
    db.query(
        "SELECT * FROM Employer WHERE emp_username = ? AND emp_password = ?",
        [username, password],
        (err, result, fields) => {
            if(err) throw err;
            console.log("grabbing user");
            userInfo.push(result[0].emp_username);
            userInfo.push(result[0].emp_password);
            userInfo.push(result[0].email);
            userInfo.push(result[0].address);
            userInfo.push(result[0].firstName);
            userInfo.push(result[0].lastName);
            res.send(userInfo);
        }
    )
})
app.get("/checkAccess", (req, res) => {
    if(loggedInUser.user === ""){
        res.send("not logged in");
    }
    else {
        res.send("logged in");
    }
})

app.post("/editStudent", (req,res) => {
    const stuUsername = req.body.username;
    const stuPassword = req.body.password;
    const stuFName = req.body.fName;
    const stuLName = req.body.lName;
    const school = req.body.school;
    var stuAge = req.body.age;
    const stuEmail = req.body.email;

    stuAge = parseInt(stuAge);

    var values = [
        stuFName, stuLName, school, stuAge, stuEmail, stuPassword, stuUsername, loggedInUser.user, loggedInUser.pass
    ];

    console.log(values);

    db.query(
        "UPDATE Student SET " +
        "firstName = ?, " +
        "lastName = ?, " +
        "schoolName = ?, " +
        "age = ?, " +
        "email = ?, " +
        "stu_password = ?, " +
        "stu_username = ? " +
        "WHERE stu_username = ? AND stu_password = ?",
        values,
        function(err, rows, fields){
            if (err) throw err;
            loggedInUser.user = stuUsername;
            loggedInUser.pass = stuPassword;
        });
    
        res.send("edited")
})

app.post("/Login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const logged = req.body.username

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
                    loggedInUser.user = username;
                    loggedInUser.pass = password;
                    console.log(emp);
                    console.log(`FL2${logged}`);
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
                            loggedInUser.user = username;
                            loggedInUser.pass = password;
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

app.get("/SjobBoard", (req,res)=>{
    //const address  = req.body.address;
    db.getConnection(function(err,connection){
        db.query("SELECT address, employerID, latitude, longitude FROM Employer",
            (err2,result)=>{
                res.send(result)
                if(err2) throw err2
            })
        })
})


app.get("/JobBoard", (req, res) => {

    db.getConnection(function(err, connection){
        db.query("SELECT * FROM Job WHERE status = 0", (err, result) => {
            console.log(result);
            res.send(result) 

        })
    })
})

app.post("/insertJobs", (req, res) => {
    console.log("Chosen jobs:", req.body)

    let values = req.body;
    let arr = values.reduce((o, a) => {
        let newArr = [];
        newArr.push(a.jobID)
        newArr.push(a.jobName)
        newArr.push(a.jobCategory)
        newArr.push(a.wage)
        newArr.push(a.skillLevel)
        newArr.push(a.experienceRequired)
        newArr.push(a.datePosted)
        newArr.push(a.status)
        newArr.push(a.description)
        newArr.push(stuID)
        
        o.push(newArr)
        return o;
    }, [])

    console.log(`Arr contents: ${arr}`)

    db.query("INSERT INTO StudentToDoJobs (jobID, jobName, jobCategory, wage, skillLevel, experienceRequired, datePosted, status, description, studentID) \
    VALUES ?", [arr, stuID], 
    function(err, result){
        if(err) throw err;
        console.log("Server:",result)

        res.send(result);
    })
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

    stuAge = parseInt(stuAge);

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
})

app.post("/employerRegister", (req, res) => {
    const empUsername = req.body.username;
    const empPassword = req.body.password;
    const empFName = req.body.fName;
    const empLName = req.body.lName;
    const empAddress = req.body.address;
    //const phone = req.body.phone;
    const empEmail = req.body.email;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    
    var values = [
        [empFName, empLName, empAddress, empEmail, empPassword, empUsername, latitude, longitude]
    ];
    
    console.log("The result: ",values[0]);
    
    db.query(
        "INSERT INTO Employer (firstName, lastName, address, email, emp_password, emp_username, latitude, longitude) VALUES (?)",
        values,
        function(err, rows, result){
            if (err) throw err;
            
        });
        
        res.send("registered")
})




app.post("/employerEdit", (req,res) => {
    const empUsername = req.body.username;
    const empPassword = req.body.password;
    const empFName = req.body.fName;
    const empLName = req.body.lName;
    const empAddress = req.body.address;
    const empEmail = req.body.email;

    var values = [
        empFName, empLName, empAddress, empEmail, empPassword, empUsername, loggedInUser.user, loggedInUser.pass
    ];
    
    console.log(values);
    
    db.query(
        "UPDATE Employer SET " +
        "firstName = ?, " +
        "lastName = ?, " +
        "address = ?, " +
        "email = ?, " +
        "emp_password = ?, " +
        "emp_username = ? " +
        "WHERE emp_username = ? AND emp_password = ?",
        values,
        function(err, rows, fields){
            if (err) throw err;
            loggedInUser.user = empUsername;
            loggedInUser.pass = empPassword;
        });
 
        res.send("editedEmployer")
        //Window.alert("Edited Successfuly!")
})

app.post('/jobPosting', (req, res) => {
    console.log(req.body)
    const jobName = req.body.jobName;
    const jobCategory = req.body.category;
    const wage = req.body.wage;
    const skillLevel = req.body.jobSkill;
    const expRequired = req.body.jobExp;
    const datePosted = req.body.date;
    const status = req.body.jobStatus;
    const desc = req.body.description;
    const empID = req.body.empID;

    db.query(
        "INSERT INTO Job (jobName, jobCategory, wage, skillLevel, experienceRequired, datePosted, status, description, employerID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [jobName, jobCategory, wage, skillLevel, expRequired, datePosted, status, desc, empID],   
        (err, result) => {
            if (err) {
                throw err;
            }else{
                res.send("job inserted successfully")
                console.log(result)
            }
        });
})

app.get('/studentID', (req, res) => {
    global.stuID = [];
    let username = loggedInUser.user;
    let password = loggedInUser.pass;

    db.query(
        'SELECT studentID FROM Student WHERE stu_username = ? AND stu_password = ?',
        [username, password, stuID], (err, result) => {
            if(err){
                throw err;
            }else{
                console.log("getting student..")
                console.log(result)
                
                stuID.push(result[0].studentID)
                res.send(stuID);
            }
        }
    )
})

app.get('/employerID', (req, res) => {
    global.empID = [];
    let username = loggedInUser.user;
    let password = loggedInUser.pass;

    db.query(
        'SELECT employerID FROM Employer WHERE emp_username = ? AND emp_password = ? ',
        [username, password, empID], (err, result) => {
            if(err){
                throw err;
            }else{
                console.log("getting empID..")
                console.log(result)
                
                empID.push(result[0].employerID)
                res.send(empID);
            }
        }
    );

})

app.get("/employerJob/:employerID", (req, res) => {
    const empID = req.params.employerID;
    db.query(
        'SELECT * FROM Job WHERE employerID = ?',
        [empID], (err, result) => {
            if(err) throw err;
            console.log(result)
            res.send(result)
        }
    )
});

app.get("/chosenJobs/:studentID", (req, res) => {
    const stuID = req.params.studentID;
    db.query(
        'SELECT * FROM StudentToDoJobs WHERE studentID = ?', 
        stuID, (err, result) => {
            if(err) throw err;
            console.log(result)
            res.send(result)
        }
    )
});

app.delete("/delete/:jobID", (req, res) => {
    const jobID = req.params.jobID;
    console.log(jobID)
    db.query(
        'DELETE FROM Job WHERE jobID = ?', 
        jobID, (err, result) => {
            if(err) throw err;
            res.send(result)
        })
})

app.put("/updateJob/:jobID", (req, res) => {
    const jobID = req.params.jobID;
    console.log(jobID)
    db.query(
        'UPDATE Job SET status = 1 WHERE jobID = ?',
        jobID, (err, result) => {
            if(err) throw err;
            res.send(result)
        }
    ) 
})

app.listen(3001);
