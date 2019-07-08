import React from 'react'

function Table(props) {
    return (
        <div className='ui container'>
            <table className='ui celled table'>
                <tr>
                    <th>Name: {props.table.name}</th>
                    <th>Address: {props.table.address}</th>
                    <th>Action</th>
                </tr>

                <tr>
                    <td>Name: {props.tableData.customer}</td>
                    <td>Address: {props.tableData.customaddress}</td>
                    <td>Action</td>
                </tr>

            </table>
        </div>
    )
}

export default Table