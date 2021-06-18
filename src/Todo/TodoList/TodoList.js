import "./TodoList.css"

const TodoList = (props) =>{
    return(
        <div>
            <ul className="TodoList">{
                props.dataTodos.map((todo) => {
                    return <li key={todo.id}>{todo.title}</li>
                })
            }
            </ul>
        </div>
    )
}

export default TodoList