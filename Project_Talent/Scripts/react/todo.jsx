import React from 'react'
import ReactDOM from 'react-dom'
import TodoItems from './Components/Todo/TodoItem'
import Table from './Components/Todo/Table'


function Time() {
    const date = new Date()
    const Hours = date.getHours()
    let greeting;

    if (Hours < 12) {
        greeting = "good morning"
    } else if (Hours >= 12 && Hours < 17) {
        greeting = "afternoon"
    } else {
        greeting = "night"
    }
    return (
        <h1>Good {greeting}!</h1>    
    )
}

function List() {
    return (
        <div className="ui container">
            <Time />
            <TodoItems />
            <div class="table">
                <Table
                    table={{ name: "", address: "" }}
                    tableData={{ customer: "John Wick", customaddress: "Mark" }}/>

                <Table
                    table={{ name: "", address: "" }}
                    tableData={{customer: "Anthony", customaddress: "awesome road"}}/>
            </div>

            <button className="ui button">I will be useful soon</button>
        </div>
   )
}

ReactDOM.render(
    <List />,
    document.getElementById("todo")
)