import React from "react";
import TodoList from "./Todo/TodoList";


function App() {
    const todos = [
        {id: 1, completed: false, title: 'Buy a bread'},
        {id: 2, completed: false, title: 'Buy a butter'},
        {id: 3, completed: false, title: 'Buy a milk'}

    ]
    return (
    <div className='wrapper'>
        <h1>React tutorial</h1>
        <TodoList todos={todos}/>
    </div>
    );
}

export default App;
