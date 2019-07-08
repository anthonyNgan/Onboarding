import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button, Icon, Modal } from 'semantic-ui-react';

export class CustomerTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerList: [],
            Success: { Data: '' },

            CustomerId: '',
            CustomerName: '',
            CustomerAddress: ''


        };
        this.loadData = this.loadData.bind(this);

        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        $.ajax({
            url: "/Customers/GetCustomerData",
            method: "GET",
            success: function (data) { this.setState({ customerList: data }) }.bind(this)
        });
    }
    update(id) {
        //ajax call logic
    }

    delete(id) {
        $.ajax({
            url: '/Customers/GetCustomerData/' + id,
            method: "DELETE",
            success: function (data) { this.setState({ customerList: data }) }.bind(this)
        });
    }

    render() {

        let customerList = this.state.customerList;

        let tableData = null;

        if (customerList !== "") {
            tableData = customerList.map(customer =>
                <tr key={customer.Id}>
                    <td className="two wide">{customer.Name}</td>
                    <td className="ten wide">{customer.Address}</td>

                    <td className="four wide">
                        <i className="outline write icon" onClick={this.update.bind(this, customer.Id)}></i>
                        <i className="remove icon" onClick={this.delete.bind(this, customer.Id)}></i>
                    </td>
                </tr>
            )
        }
        return (
            <React.Fragment>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th className="two wide">Name</th>
                            <th className="ten wide">Address</th>
                            <th className="four wide">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default CustomerTable;