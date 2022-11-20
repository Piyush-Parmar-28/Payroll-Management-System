import React, {Fragment} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from './components/Footer';
import LoginSignUp from './pages/LoginSignUp';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Employees from './pages/Employees';
import AddEmp from './pages/AddEmp';
import AddDept from './pages/AddDept';
import EmpDetails from './pages/EmpDetails';
import DeleteEmp from './pages/DeleteEmp';

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path= "/" element= {<LoginSignUp/>} />
                    <Route exact path='/contact' element={<Contact/>} />
                    <Route exact path='/home' element= {<Home/>} />
                    <Route exact path= "/empList" element={<Employees/>} />
                    <Route exact path="/addEmp" element={<AddEmp/>} />
                    <Route exact path= "/addDept" element={<AddDept/>} />
                    <Route exact path='/findEmp' element={<EmpDetails />} />
                    <Route exact path="/deleteEmp" element= {<DeleteEmp/>} />
                </Routes>
            </BrowserRouter>

            <Footer></Footer>

        </Fragment>
    )
}

export default App