import { useState } from "react"
import { useTodo } from "../context.js"


function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    const [todomssg, setTodomssg] = useState(todo.name || "No value to display")
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()


    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }
    const edit = () => {

        updateTodo(todo.id, { ...todo, name: todomssg })

        setEditable(false)
    }

    return (
        <div className="w-full flex justify-center items-center m-2 p-2 bg-blue-200 ">
            <input className="mr-2" type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
            <input
                type="text" value={todomssg} readOnly={!editable} onChange={(e) => setTodomssg(e.target.value)}
                className={`text-black w-full rounded p-1 ${editable ? 'border-black-500/10 px-2' : 'border-transparent'} ${todo.completed ? 'line-through bg-grey-100' : 'bg-blue-200'}`} />
            <button onClick={() => {
                if(todo.completed) return
                if (editable) {
                    edit()
                } else {
                    setEditable((prev) => !prev)
                }
            }} disabled={todo.completed} 
            className="mx-2 p-1 transition active:scale-95  hover:bg-blue-400 cursor-pointer  border rounded bg-blue-100">
                {editable ? "📁" : "✏️"}
                </button>
            <button className="ml-1 p-1 transition active:scale-95  hover:bg-blue-400 cursor-pointer  border rounded bg-blue-100" onClick={() => deleteTodo(todo.id)}>❌</button>
        </div>
    )
}
export default TodoItem