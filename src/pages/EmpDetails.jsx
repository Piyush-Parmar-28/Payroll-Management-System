import React, { Fragment, useState } from 'react'
import axios from "axios"

import Navbar from '../components/Navbar'

const EmpDetails = (event) => {

    const [inputDetails, setInputDetails] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    })

    const handleChange = (event) => {
        setInputDetails({
            ...inputDetails, [event.target.name]: event.target.value
        })
    }
    const [empData, setEmpData] = useState([])

    const sendData = async(event) => {
        event.preventDefault()
        await axios.post("http://localhost:5000/findEmp", {
            fname: inputDetails.fname,
            lname: inputDetails.lname,
            email: inputDetails.email,
            phone: inputDetails.phone
        }).then(res => {
            setEmpData(res.data)
        })
    }
    console.log(typeof(empData));


    return (
        <Fragment>
            <Navbar />

            <section class="clean-block clean-form dark">
                <div class="container">
                    <div class="block-heading">
                        <h2 class="text-info">Find Employee</h2>
                        <p>Enter detais of employee to be updated...</p>
                    </div>

                    {
                        empData.length === 0 ?
                            <form>
                                <div class="mb-3">
                                    <label class="form-label" for="email">First Name</label>
                                    <input class="form-control item" type="text" id="name1" name="fname" onChange={handleChange} />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="email">Last Name</label>
                                    <input class="form-control item" type="text" id="name2" name="lname" onChange={handleChange} />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="email">Email</label>
                                    <input class="form-control item" type="email" id="email" name="email" onChange={handleChange} />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="email">Phone Number</label>
                                    <input class="form-control item" type="number" id="phoneNo" name="phone" onChange={handleChange} />
                                </div>

                                <button class="btn btn-primary" type="submit" onClick={sendData}>Find Employee</button>

                            </form>
                            :
                            empData.map(content => 
                                <div>
                                    <div >
                                        <img
                                            src=""
                                        ></img>
                                    </div>

                                    <div>
                                        <span>{content.fname+ " "+content.lname}</span>
                                    </div>

                                    <div>
                                        <span>{content.email}</span>
                                    </div>

                                    <div>
                                        <span>{content.salary}</span>
                                    </div>

                                    <div>
                                        <span>{content.phone}</span>
                                    </div>

                                </div>
                            )
                    }

                </div>
            </section>
        </Fragment>
    )
}

export default EmpDetails