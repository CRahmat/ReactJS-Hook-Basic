import "./TodoCreate.css"
import {useState} from 'react'


const TodoCreate = (props) =>{
    const [getNewTodo, setNewTodo] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        const newTodo = {
            id : Math.floor(Math.random * 100) + 1,
            title : getNewTodo
        }
        props.onCreateTodo(newTodo)

        setNewTodo('')
    }

    const onChangeInput = (event) => {
        setNewTodo(event.target.value)
        
    }
    return(
        <div className="Input">
            <form onSubmit={handleSubmit}>
                <input value={getNewTodo} placeholder="Massukan TodoList Baru..." type="text" onChange={onChangeInput}/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default TodoCreate;