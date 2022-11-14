import React, { Fragment, useState } from 'react'
import Axios from "axios"
import { v4 as uuidv4 } from 'uuid';    //  Generating Unique ID using UUID Package of Node JS

import Navbar from '../components/Navbar'

const AddEmp = () => {

    const [empDetails, setEmpDetails] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: 0,
        salary: 0
    })

    const handleChange = (event)=> {
        setEmpDetails({
            ...empDetails, [event.target.name]: event.target.value
        })
        // console.log("In handle change func "+ event.target);
    }

    const submitData = () => {
        Axios.post("http://localhost:5000/addEmp", {
            id: uuidv4(),
            fname: empDetails.fname,
            lname: empDetails.lname,
            email: empDetails.email,
            phone: empDetails.phone,
            salary: empDetails.salary
        })
    }

    return (
        <Fragment>
            <Navbar />

            <section class="clean-block clean-form dark">
                <div class="container">
                    <div class="block-heading">
                        <h2 class="text-info">Add Employee</h2>
                        <p>Fill the employee details below...</p>
                    </div>

                    <form>
                        <div class="mb-3">
                            <label class="form-label" for="email">First Name</label>
                            <input class="form-control item" type="text" id="name1" name= "fname" onChange= {handleChange}/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="email">Last Name</label>
                            <input class="form-control item" type="text" id="name2" name= "lname" onChange= {handleChange}/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="email">Email</label>
                            <input class="form-control item" type="email" id="email" name= "email" onChange= {handleChange}/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="email">Phone Number</label>
                            <input class="form-control item" type="number" id="phoneNo" name= "phone" onChange= {handleChange}/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="email">Salary (₹)</label>
                            <input class="form-control item" type="number" id="sal" name= "salary" onChange= {handleChange}/>
                        </div>

                        <button class="btn btn-primary" type="submit" onClick={submitData}>Add Employee</button>

                    </form>
                </div>
            </section>
        </Fragment>
    )
}

export default AddEmp