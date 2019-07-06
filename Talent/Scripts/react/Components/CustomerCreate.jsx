import React from 'react';      
import CustomerUpdate from './CustomerUpdate';

const Table =
    <table className="ui celled table">
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
    </table>;

function CustomerCreate() {
    return (
        <div className="ui container">
            <h1 className="ui header">Customer</h1>
            <button className="ui primary button">Create New</button>
        </div>
        <Table />
    )
}

export default CustomerCreate