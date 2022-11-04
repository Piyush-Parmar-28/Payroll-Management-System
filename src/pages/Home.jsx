import React, { Fragment } from 'react'

import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
    return (
        <Fragment>

            <Navbar></Navbar>

            <section class="clean-block clean-hero" style={{ backgroundImage: "url(&quot;assets/img/tech/image4.jpg&quot;)", color: "rgba(9, 162, 255, 0.85)" }}>

                <div class="text">
                    <h2>Payroll Management System</h2>
                    <p>Explore the features of the Payroll Management System</p>
                    
                    <a href='#features'>
                        <button class="btn btn-outline-light btn-lg" type="button">Explore</button>
                    </a>
                </div>

            </section>

            <div class="container" id='features'>

                <div class="row mt-5 mb-3">
                    <h3 className='d-flex justify-content-center align-items-center'>Features</h3>
                    <Card
                        cardName="Add Employee"
                        cardDesc="Lorem ipsum dolor sit amet"
                        cardLink="/addEmp"
                        cardBtn="Add Employee"
                    ></Card>

                    <Card
                        cardName="Add Department"
                        cardDesc="Lorem ipsum dolor sit amet"
                        cardLink="/addDept"
                        cardBtn="Add Department"
                    ></Card>

                    <Card
                        cardName="Update Employee"
                        cardDesc="Lorem ipsum dolor sit amet"
                        cardLink="/updateEmp"
                        cardBtn="Update Employee"
                    ></Card>

                    <Card
                        cardName="Employee List"
                        cardDesc="Lorem ipsum dolor sit amet"
                        cardLink="/empList"
                        cardBtn="View List"
                    ></Card>

                    <Card
                        cardName="Delete Employee"
                        cardDesc="Lorem ipsum dolor sit amet"
                        cardLink="/deleteEmp"
                        cardBtn="Delete Employee"
                    ></Card>

                    <Card
                        cardName="Generate Pay Slip"
                        cardDesc="Lorem ipsum dolor sit amet"
                        cardLink="/pSlip"
                        cardBtn="Generate Slip"
                    ></Card>

                </div>
            </div>

        </Fragment>
    )
}

export default Home