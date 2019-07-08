import React, {Component } from 'react';
import ReactDOM from 'react-dom';

import CustomerTable from './Components/Customer/CustomerList';

function CustomerPage() {
    return (
        <div>

            <CustomerTable />
        </div>
  )
}

ReactDOM.render(
    <CustomerPage />,
   document.getElementById('customers')
);