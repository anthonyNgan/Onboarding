import React from 'react'
import ReactDOM from 'react-dom'

import ProductList from './Components/Product/ProductList'

function ProductDisplay() {
    return (
        <div className="ui container">
            <ProductList />   
        </div>
     )
}

ReactDOM.render(
    <ProductDisplay />,
    document.getElementById('products')
);