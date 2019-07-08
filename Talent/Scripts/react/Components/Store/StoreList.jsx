import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button, Icon, Modal } from 'semantic-ui-react';

export class StoreList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeList: [],
            Success: { Data: '' },

            StoreId: '',
            StoreName: '',
            StoreAddress: ''


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
            url: "/Stores/GetStoreData",
            method: "GET",
            success: function (data) { this.setState({ storeList: data }) }.bind(this)
        });
    }
    update(id) {
        //ajax call logic
    }

    delete(id) {
        $.ajax({
            url: '/Stores/GetStoreData/' + id,
            method: "DELETE",
            success: function (data) { this.setState({ storeList: data }) }.bind(this)
        });
    }

    render() {

        let storeList = this.state.storeList;

        let tableData = null;

        if (storeList !== "") {
            tableData = storeList.map(store =>
                <tr key={store.Id}>
                    <td className="two wide">{store.Name}</td>
                    <td className="ten wide">{store.Address}</td>

                    <td className="four wide">
                        <i className="outline write icon" onClick={this.update.bind(this, store.Id)}></i>
                        <i className="remove icon" onClick={this.delete.bind(this, store.Id)}></i>
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

export default StoreList;