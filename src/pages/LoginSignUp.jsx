import React, { Fragment, useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

const LoginSignUp = () => {

    const [state, setState]= useState("signUp")

    const changeState= () =>{
        if (state === "signUp") {
            setState("login")
        }
        else{
            setState("signUp")
        }
    }

    return (
        <Fragment>
            <Navbar />

            {state === "signUp" ? <SignUp changeStateFunc={changeState} /> : <Login changeStateFunc= {changeState} />}

        </Fragment>
    )
}

export default LoginSignUp