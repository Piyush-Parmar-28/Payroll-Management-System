import React from 'react'

const LoginAs = () => {
    return (
        <section class="clean-block clean-form dark">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">Login as: </h2>
                    <p>Select how would you like to login...</p>
                </div>

                <form>
                    <div class="mb-3">
                        <label class="form-label" for="email">Email</label>
                        <input class="form-control item" type="email" id="email" name="email" onChange={handleChange} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label" for="password" >Password</label>
                        <input class="form-control" type="password" id="password" name="pass" onChange={handleChange} />
                    </div>

                    <button class="btn btn-primary" type="submit" onClick={submitData}>Sign Up</button>

                    <div className='d-flex align-items-center justify-content-center'>
                        <p>Already have an account?</p>
                        <button class="btn btn-primary" type="submit" onClick={props.changeStateFunc}>Login</button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default LoginAs