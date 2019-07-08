import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button, Icon, Modal } from 'semantic-ui-react';

export class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            Success: { Data: '' },

            ProductId: '',
            ProductName: '',
            ProductPrice: ''


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
            url: "/Products/GetProductData",
            method: "GET",
            success: function (data) { this.setState({ productList: data }) }.bind(this)
        });
    }
    update(id) {
        //ajax call logic
    }

    delete(id) {
        $.ajax({
            url: '/Products/GetProductData/' + id,
            method: "DELETE",
            success: function (data) { this.setState({ productList: data }) }.bind(this)
        });
    }

    render() {

        let productList = this.state.productList;

        let tableData = null;

        if (productList!== "") {
            tableData = productList.map(product =>
                <tr key={product.Id}>
                    <td className="two wide">{product.Name}</td>
                    <td className="ten wide">{product.Price}</td>

                    <td className="four wide">
                        <i className="outline write icon" onClick={this.update.bind(this, product.Id)}></i>
                        <i className="remove icon" onClick={this.delete.bind(this, product.Id)}></i>
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
                            <th className="ten wide">Price</th>
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

export default ProductList;