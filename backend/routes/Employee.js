const express= require("express")
const db= require("../config/db")
const cors= require("cors")
//  'express' will be used to create & maintain connections in of the database
const app= express()
const port= 5000
app.use(cors())
app.use(express.json())

app.post("/addEmp", (req, res) =>{
    const id= uuidv4();
    const fname= req.body.fname;
    const lname= req.body.lname;
    const email= req.body.email;
    const phone= req.body.phone;
    const salary= req.body.salary;

    db.query("insert into employees (id, fname, lname, email, phone, salary) values (?, ?, ?, ?, ?) ", [id, fname, lname, email, phone, salary], (err, res) =>{
        if (err) {
            console.log("Error occured in adding employee data: "+ err);
        }
        else{
            console.log("Employee data added successfully!");
        }
    })
})
