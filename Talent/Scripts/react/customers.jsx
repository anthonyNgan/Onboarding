import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import CustomerCreate from './Components/CustomerCreate';

function CustomerPage() {
    return (
        <CustomerCreate />
  )
}


ReactDOM.render(
    <CustomerPage />,
   document.getElementById('customers')
);