import React, { Fragment } from 'react'

import Navbar from '../components/Navbar'

const Contact = () => {
    return (
        <Fragment>
            <Navbar />

            <section class="clean-block clean-form dark">
                <div class="container">
                    <div class="block-heading">
                        <h2 class="text-info">Contact Us</h2>
                        <p>Contact Us in case of any queries...</p>
                    </div>

                    <form>
                        <div class="mb-3">
                            <label class="form-label" for="name">Name</label>
                            <input class="form-control" type="text" id="name" name="name" />
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label" for="subject">Subject</label>
                            <input class="form-control" type="text" id="subject" name="subject" />
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label" for="email">Email</label>
                            <input class="form-control" type="email" id="email" name="email" />
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label" for="message">Message</label>
                            <textarea class="form-control" id="message" name="message" />
                        </div>

                        <div class="mb-3">
                            <button class="btn btn-primary" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </section>

        </Fragment>
    )
}

export default Contact