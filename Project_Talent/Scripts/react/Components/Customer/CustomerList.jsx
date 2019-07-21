import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button, Icon, Modal } from 'semantic-ui-react';
import CustomerCreate from './CustomerCreate';
import CustomerUpdate from './CustomerUpdate';
import CustomerDelete from './CustomerDelete';

export default class CustomerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerList: [],
            Success: { Data: '' },

            CustomerId: '',
            CustomerName: '',
            CustomerAddress: '',

            showCreateModal: false,
            
            showDeleteModal: false,
            removeId: 0,

            showUpdateModal: false,
            updateId: 0,

            Sucess: [],
            errors: {}

        };
        this.loadData = this.loadData.bind(this);



        this.handleDelete = this.handleDelete.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);

        this.showCreateModal = this.showCreateModal.bind(this);
        this.onChange = this.onChange(this);
        this.closeCreateModal = this.closeCreateModal.bind(this);

        this.showUpdateModal = this.showUpdateModal.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.update = this.update.bind(this);
        this.closeUpdateModal = this.closeUpdateModal.bind(this);

    }

    componentDidMount() {
        this.loadData();
    }

    //Delete    
    handleDelete(id) {
        this.setState({ showDeleteModal: true });
        this.setState({ removeId: id });
    }

    closeDeleteModal(e) {
        e.preventDefault();
        this.setState({ showDeleteModal: false });
        window.location.reload()
    }

    loadData() {
        $.ajax({
            url: "/Customers/GetCustomerData",
            method: "GET",
            success: function (data) { this.setState({ customerList: data }) }.bind(this)
        });

    }

    showCreateModal() {
        event.preventDefault();
        this.setState({ showCreateModal: true });
    }

    closeCreateModal() {
        event.preventDefault();
            this.setState({ showCreateModal: false });
            window.location.reload();
    }

    onChange() {

        let errors = {}

        let formIsOpen = true
        if (!this.state.CustomerName) {
            formIsOpen = false;
            errors['CustomerName'] = '*Please enter the Customer Name.';
        }

        if (typeof this.state.CustomerName !== "undefined") {
            if (!this.state.CustomerName.match(/^[a-zA-Z ]*$/)) {
                formIsOpen = false;
                errors["CustomerName"] = "*Please enter alphabet characters only.";
            }
        }

        if (!this.state.CustomerAddress) {
            formIsOpen = false;
            errors['CustomerAddress'] = '*Please enter the Customer Address'
        }

        this.setState({
            errors: errors
        });
        return formIsOpen
    }

    showUpdateModal(id) {
        this.setState({ showUpdateModal: true });
        this.setState({ updateId: id });

        $.ajax({
            url: "/Customers/UpdateCustomer",
            type: "POST",
            data: data,
            success: function (data) {
                this.setState({ Success: data })
                window.location.reload()
            }.bind(this)
        });
    }

    closeUpdateModal() {

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
                        <td><Button className="ui yellow button" onClick={this.onUpdate.bind(this, customer.Id)} >Edit</Button></td>
                        <td><Button className="ui red button" onClick={this.handleDelete.bind(this, customer.Id)}><i className="trash icon"></i>DELETE</Button></td>
                    </td>
                </tr>
            )
        }
        return (
            <React.Fragment>
                <div>
                    <Button primary onClick={this.showCreateModal}>Create new Customer</Button>
                    <CustomerCreate onChange={this.onChange} onClose={this.closeCreateModal} onUpdate={this.onUpdate} showCreateModal={this.state.showCreateModal} />
                </div>
                <div>
                    <CustomerUpdate onClose={this.onClose} onUpdate={this.onUpdate} />
                    <CustomerDelete delete={this.state.removeId} onClose={this.closeDeleteModal} onDeleteSubmit={this.onDeleteSubmit} showDeleteModal={this.state.showDeleteModal} />
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
                </div>
            </React.Fragment>
            )
        }
    }