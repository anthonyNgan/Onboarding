import React, {Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import CustomerTable from './Components/Customer/CustomerList';
import CustomerCreate from './Components/Customer/CustomerCreate';
import CustomerDelete from './Components/Customer/CustomerDelete';

function CustomerPage() {
    return (
        <React.Fragment>
            <div> <CustomerCreate /> </div>
            <div> <CustomerTable /> </div>
            <div> <CustomerDelete /> </div>
        </React.Fragment>
  )
}


ReactDOM.render(
    <CustomerPage />,
   document.getElementById('customers')
);