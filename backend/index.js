//  Creating backend logic

const express= require("express")
const db= require("./config/db")
const cors= require("cors")

//  'express' will be used to create & maintain connections in of the database
const app= express()
const port= 5000
app.use(cors())
app.use(express.json())



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

    console.log("email: "+ email);
    console.log("pass: "+ password);

    // console.log(db);

    db.query("insert into employees (email, password) values (?, ?)", [email, password], (err, result) =>{
        console.log("here");
        if (err) {
            console.log("error occured: "+ err);
        }
        else{
            console.log("data entered successfully.");
        }
    })
})

app.listen(port, ()=>{
    console.log("Server is running on port: "+ port);
})