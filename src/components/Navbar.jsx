import React, { Fragment } from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <Fragment>
            <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
                <div class="container">

                    <Link to="/home">
                        <p>pManager</p>
                    </Link>
                    
                    <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
                        <span class="visually-hidden">Toggle navigation</span>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navcol-1">
                        <ul class="navbar-nav ms-auto">

                            <Link to="/">
                                <li class="nav-item">Login</li>
                            </Link>
                            
                            <Link to="/contact">
                                <li class="nav-item">Contact Us</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar