import React, { Fragment } from 'react'

import Navbar from '../components/Navbar'
import TableRow from '../components/TableRow'

const Employees = () => {
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
                        <div class="row">
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
                        </div>

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
                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

                                    <TableRow
                                        imgSrc=""
                                        empName="xyz"
                                        position="Accountant"
                                        office="Japan"
                                        jDate="12/10/2022"
                                        sal="25000"
                                    ></TableRow>

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