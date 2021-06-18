import './Todo.css'
import {useState} from 'react'
import TodoList from "./TodoList/TodoList"
import ReactFile from "../ReactFile/ReactFile"
import TodoCreate from "../Todo/TodoCreate/TodoCreate";

const Todo = () =>{
    const [getTodos,setTodos] = useState([
        {id:1,title:"Learn React"},
        {id:2,title:"Build Tools"},
        {id:3,title:"Record"},
    ])
    
    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
    }
    return(
        <div className="Todo">
        <h1 className="TitleTodo">ToDo List</h1>
        <TodoCreate onCreateTodo={eventCreateTodo}/>
        <TodoList dataTodos={getTodos}/>
        <ReactFile/>
        </div>
    )
}

export default Todo