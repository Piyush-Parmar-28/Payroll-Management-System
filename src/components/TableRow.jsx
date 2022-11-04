import React, { Fragment } from 'react'

const TableRow = (props) => {
    return (
        <Fragment>

            <tr>
                <td>
                    <img class="rounded-circle me-2" width="30" height="30" src={props.imgSrc} />
                    {props.empName}
                </td>

                <td>{props.position}</td>
                <td>{props.office}</td>
                <td>{props.jDate}</td>
                <td>{props.sal}</td>
            </tr>

        </Fragment>
    )
}

export default TableRow