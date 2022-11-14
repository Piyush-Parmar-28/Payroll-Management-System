import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <Fragment>
            <div class="col-md-6 col-lg-4">
                <div class="project-card-no-image">
                    <h3>{props.cardName}</h3>
                    <h4>{props.cardDesc}</h4>
                    
                    <Link to={props.cardLink}>
                        <p class="btn btn-outline-primary btn-sm" role="button" href="#">{props.cardBtn}</p>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Card