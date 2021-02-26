import React from "react";
import TodoList from "./Todo/TodoList";




function App() {
    let todos = [
        {id: 1, completed: false, title: 'Buy a bread'},
        {id: 2, completed: false, title: 'Buy a butter'},
        {id: 3, completed: false, title: 'Buy a milk'}

    ]
    function toggleTodo(id) {
        todos.forEach((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
        });
        return todos;

    }
    return (
    <div className='wrapper'>
        <h1>React tutorial</h1>
        <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
    );
}

export default App;
