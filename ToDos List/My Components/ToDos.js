import React from 'react'
import Todo_item from './Todo_item'

export default function ToDos(props) {
    return (
        <div className= 'container'>
            <h1 className= "my-3">
                Todos List
            </h1>
            {props.todos.length === 0? "No todos to display!":
                props.todos.map(
                    (todo)=>{
                        return<Todo_item todo= {todo} key={todo.sNo} onDelete={props.onDelete}/>
                    }
                )
            }
        </div>
    )
}
