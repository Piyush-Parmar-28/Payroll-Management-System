//  Creating backend logic
const express= require("express")
const db= require("./config/db")
const cors= require("cors")
//  'express' will be used to create & maintain connections in of the database
const app= express()
const port= 5000
app.use(cors())
app.use(express.json())

const {addEmp} = require('./routes/Employee')
const {getAll} = require("./routes/Employee")
const {findEmp}= require("./routes/Employee")

//  Creating Routes
//  1. Home Route
app.get("/", (req, res) =>{
    res.send("At Home")
    console.log("Home Route");
})

//  1. User SignUp
app.post("/signup", (req, res) =>{
    const email= req.body.email;
    const password= req.body.password;

    // console.log("email: "+ email);
    // console.log("pass: "+ password);

    // console.log(db);

    db.query("insert into users (email, password) values (?, ?)", [email, password], (err, result) =>{
        if (err) {
            console.log("error occured: "+ err);
        }
        else{
            console.log("data entered successfully.");
        }
    })
})

//  2. Add Employee
app.post('/addEmp',addEmp)

//  3. Add Department
app.post("/addDept", (req, res) =>{
    const id= req.body.id;
    const dName= req.body.dName;
    const dLoc= req.body.dLoc;
    const dBudget= req.body.dBudget;
    const manager= req.body.dManager;

    db.query("insert into departments (id, d_name, manager, location, budget) values (?, ?, ?, ?, ?)", [id, dName, manager, dLoc, dBudget], (err, result) =>{
        if (err) {
            console.log("Error in adding department: " + e);
        }
        else{
            console.log("Department added successfully!");
        }
    })
})

//  4. Find Employee
app.post("/findEmp", findEmp)

//  5. Get all employees
app.get("/getAll", getAll)


app.listen(port, ()=>{
    console.log("Server is running on port: "+ port);
})