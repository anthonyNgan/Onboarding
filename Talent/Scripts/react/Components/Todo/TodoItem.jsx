import React from 'react'
import Table from './Table'


function TodoItems() {
    return (
        <div className = "ui container">
            <input className="ui checkbox" type="checkbox" />
            <p>Up-skill React</p>
            <input type="checkbox" />
            <p>Create a table using React design</p>        
        </div>    
    )
}
export default TodoItems