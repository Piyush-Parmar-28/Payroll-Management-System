import React, { Fragment } from 'react'
import { useState } from 'react'
import axios from "axios"
import {v4 as uuidv4} from "uuid"
import Navbar from '../components/Navbar'

const AddDept = () => {

    const [deptDetails, setDeptDetails]= useState({
        id: "",
        dName: "",
        dLoc: "",
        dManager: "",
        dBudget: ""
    })

    function handleChange(event) {
        setDeptDetails({
            ...deptDetails, [event.target.name]: event.target.value
        })
    }

    const submitData= () =>{
        axios.post("http://localhost:5000/addDept", {
            id: uuidv4(),
            dName: deptDetails.dName,
            dLoc: deptDetails.dLoc,
            dManager: deptDetails.dManager,
            dBudget: deptDetails.dBudget
        })
    }

    return (
        <Fragment>
            <Navbar />

            <section class="clean-block clean-form dark">
                <div class="container">
                    <div class="block-heading">
                        <h2 class="text-info">Add Department</h2>
                        <p>Fill the below department details...</p>
                    </div>

                    <form>
                        <div class="mb-3">
                            <label class="form-label" for="email">Department Name</label>
                            <input class="form-control item" type="text" id="name" name= "dName" onChange={handleChange} />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="password">Department Location</label>
                            <input class="form-control" type="text" id="loc" name= "dLoc" onChange={handleChange} />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="password">Department Manager</label>
                            <input class="form-control" type="text" id="manager" name= "dManager" onChange={handleChange} />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="password">Department Budget</label>
                            <input class="form-control" type="number" id="budget" name= "dBudget" onChange={handleChange} />
                        </div>

                        <button class="btn btn-primary" type="submit" onClick={submitData}>Add Department</button>

                    </form>
                    
                </div>
            </section>
        </Fragment>
    )
}

export default AddDept