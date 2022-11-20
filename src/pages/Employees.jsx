import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios"

import Navbar from '../components/Navbar'
import TableRow from '../components/TableRow'

const Employees = () => {

    const [empData, setEmpData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getAll").then(res => {
            setEmpData(res.data);
        })
    }, [])

    console.log("data: ", empData)

    return (
        <Fragment>

            <Navbar></Navbar>

            <div class="container-fluid mt-5 mb-5 p-5">
                <h3 class="text-dark mb-4 d-flex justify-content-center align-items-center">Team</h3>

                <div class="card shadow">
                    <div class="card-header py-3">
                        <p class="text-primary m-0 fw-bold">Employee Info</p>
                    </div>

                    <div class="card-body">
                        {/* <div class="row">
                            <div class="col-md-6 text-nowrap">
                                <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label class="form-label">Show&nbsp;<select class="d-inline-block form-select form-select-sm">
                                    <option value="10" selected="">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>&nbsp;</label></div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-md-end dataTables_filter" id="dataTable_filter">
                                    <label class="form-label"><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" />
                                    </label>
                                </div>
                            </div>
                        </div> */}

                        <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                            <table class="table my-0" id="dataTable">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        empData.map(contents => {
                                            if (contents === null) {
                                                return (
                                                    <p>Null</p>
                                                )
                                            }
                                            else {
                                                return (
                                                    <TableRow
                                                        id={contents.id}
                                                        imgSrc=""
                                                        empName={contents.fname+ " "+ contents.lname}
                                                        position="Accountant"
                                                        email={contents.email}
                                                        phone={contents.phone}
                                                        sal={contents.salary}
                                                    ></TableRow>
                                                )
                                            }
                                        })
                                    }
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default Employees