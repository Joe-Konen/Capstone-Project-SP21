const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "JobsToDoS2021",
    host: "45.55.136.114",
    password: "jobsrus!",
    database: "JobsToDoS2021",
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get("")

app.listen(3001);