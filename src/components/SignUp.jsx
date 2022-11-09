import React, {useState} from 'react'
import Axios from 'axios'

const SignUp = (props) => {

    const [signUpDetails, setSignUpDetails] = useState({
        email: "",
        pass: "",
    })
    
    function handleChange(event) {
        setSignUpDetails({ ...signUpDetails, [event.target.name]: event.target.value })
        console.log(signUpDetails);
    }
    
    const submitData = () => {
        console.log("sendinng data");
        Axios.post('http://localhost:5000/signup', {email: signUpDetails.email, password: signUpDetails.pass})
    }

    return (
        <section class="clean-block clean-form dark">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">Admin SignUp</h2>
                    <p>SignUp to continue...</p>
                </div>

                <form>
                    <div class="mb-3">
                        <label class="form-label" for="email">Email</label>
                        <input class="form-control item" type="email" id="email" name= "email" onChange={handleChange}/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label" for="password" >Password</label>
                        <input class="form-control" type="password" id="password" name= "pass" onChange={handleChange}/>
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

export default SignUp