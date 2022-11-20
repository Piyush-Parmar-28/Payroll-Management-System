const db = require("../config/db")

//  1. Add Employee
const addEmp = (req, res) => {
    const id = req.body.id;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const phone = req.body.phone;
    const salary = req.body.salary;

    db.query("insert into employees (id, fname, lname, email, phone, salary) values (?, ?, ?, ?, ?, ?) ", [id, fname, lname, email, phone, salary], (err, res) => {
        if (err) {
            console.log("Error occured in adding employee data: " + err);
        }
        else {
            console.log("Employee data added successfully!");
        }
    })
}

//  2. Get all employees
const getAll = (req, res) => {
    db.query("select * from employees", (err, data) => {
        if (err) {
            log(err)
        }
        else {
            console.log("emp Data is: ", data);
            res.send(data)
        }
    })
}

//  3. Find employee
const findEmp = (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const emmail = req.body.email;
    const phone = req.body.phone;

    db.query("select * from employees where (fname, lname, phone) = (?, ?, ?)", [fname, lname, phone], (err, result) => {
        if (err) throw err
        console.log("result is: "+ fname, lname, phone);
        console.log("result is: ", result);


        if (result[0].email == emmail) {

            res.send(result)
        }
        else {
            console.log("empty value");
        }

    })
    console.log("data:");
}

module.exports = {
    addEmp, getAll, findEmp
}
