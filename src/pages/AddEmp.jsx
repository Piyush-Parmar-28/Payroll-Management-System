import React, {Fragment} from 'react'

import Navbar from '../components/Navbar'

const AddEmp = () => {
    return (
        <Fragment>
            <Navbar />

            <section class="clean-block clean-form dark">
                <div class="container">
                    <div class="block-heading">
                        <h2 class="text-info">Add Employee</h2>
                        <p>Fill the below employee details...</p>
                    </div>

                    <form>
                        <div class="mb-3">
                            <label class="form-label" for="email">Email</label>
                            <input class="form-control item" type="email" id="email" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="password">Password</label>
                            <input class="form-control" type="password" id="password" />
                        </div>

                        <button class="btn btn-primary" type="submit">Log In</button>

                        <div className='d-flex align-items-center justify-content-center'>
                            <p>Don't have an account?</p>
                            <button class="btn btn-primary" type="submit">Sign Up</button>
                        </div>

                    </form>
                </div>
            </section>
        </Fragment>
    )
}

export default AddEmp