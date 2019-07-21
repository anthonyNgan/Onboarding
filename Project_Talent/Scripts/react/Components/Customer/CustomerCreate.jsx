import React from "react"
import ReactDOM from "react-dom"
import { Modal, Button, Form, Icon } from "semantic-ui-react"

export default class CustomerCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Success: { data: '' },
            CustomerName: '',
            CustomerAddress: '',

            Sucess: [],
            errors: {}
        }

        this.onCreate = this.onCreate.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClose = this.onClose.bind(this);
        
    }

    formValidation() {
        
        let errors = { }
        let formIsOpen = true;
        if (!this.state.CustomerName) {
            formIsOpen = false;
            errors['CustomerName'] = "Please enter a Name.";
        }

        if (typeof this.state.CustomerName !== "undefined") {
            if (!this.state.CustomerName.match(/^[a-zA-Z ]*$/)) {
                formIsOpen = false;
                errors["CustomerName"] = "*Please enter alphabet characters only.";
            }
        }

        if (!this.state.CustomerAddress) {
            formIsOpen = false;
            errors['CustomerAddress'] = '*Please enter the Customer Address';
        }

        this.setState({
            errors: errors
        });
        return formIsOpen;
    }

    onCreate(e) {
        e.preventDefault();
        if (this.formValidation()) {
            let data = { 'Name': this.state.CustomerName, 'Address': this.state.CustomerAddress };
            $.ajax({
                url: '/Customers/CreateCustomer',
                type: "POST",
                data: data,
                success: function (data) {
                    this.setState({ Success: data })
                    window.location.reload()
                }.bind(this)
            });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClose(){
        this.setState({ showDeleteModal: false });
        window.location.reload();
    }

    render(){
        return (
            <React.Fragment>
                <Modal open={this.props.showCreateModal} onClose={this.props.onClose} size='small'>
                    <Modal.Header> Create Customer </Modal.Header>
                    <Modal.Content>
                        <Form className="ui form segment">
                            <Form.Field>
                                <label>Name</label>
                                <input type="text" name="CustomerName" placeholder='Name' onChange={this.onChange} />
                                <div style={{ color: 'red' }}>
                                    {this.state.errors.CustomerName}
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <input type="text" name="CustomerAddress" placeholder='Address' onChange={this.onChange} />
                                <div style={{ color: 'red' }}>
                                    {this.state.errors.CustomerAddress}
                                </div>
                            </Form.Field>
                        </Form>

                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.props.onClose} secondary >Cancel
                        </Button>
                        <Button onClick={this.onCreate} className="ui green button">Create
                        <i className="check icon"></i>
                        </Button>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}
