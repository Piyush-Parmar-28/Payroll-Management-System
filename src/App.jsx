import React, {Fragment} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from './components/Footer';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Employees from './pages/Employees';
import AddEmp from './pages/AddEmp';
import AddDept from './pages/AddDept';
import UpdateEmp from './pages/UpdateEmp';
import DeleteEmp from './DeleteEmp';

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path= "/" element= {<Login/>} />
                    <Route exact path='/contact' element={<Contact/>} />
                    <Route exact path='/home' element= {<Home/>} />
                    <Route exact path= "/empList" element={<Employees/>} />
                    <Route exact path="/addEmp" element={<AddEmp/>} />
                    <Route exact path= "/addDept" element={<AddDept/>} />
                    <Route exact path='/updateEmp' element={<UpdateEmp />} />
                    <Route exact path="/deleteEmp" element= {<DeleteEmp/>} />
                </Routes>
            </BrowserRouter>

            <Footer></Footer>

        </Fragment>
    )
}

export default App