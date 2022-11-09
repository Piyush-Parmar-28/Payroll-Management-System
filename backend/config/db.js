//  Defining our db configurations

const mysql= require("mysql")
const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "payroll"
})

console.log("here1");

db.connect((err) => {
    if (err) {
        console.log('Not connected to database');
        throw err;
    } else {
        console.log('Connected to database');
    }
});

module.exports= db;