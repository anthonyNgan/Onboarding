import React from 'react'
import ReactDOM from 'react-dom'

import StoresTable from './Components/Store/StoreList'

function StoreList() {
    return (
        <div>
            <StoresTable />
        </div>       
 )
}

ReactDOM.render(
    <StoreList />,
    document.getElementById('stores')
);