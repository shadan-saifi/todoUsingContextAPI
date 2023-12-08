import { useState } from "react";
import { useTodo } from "../context.js";


function InputAddTodo() {
    const { addTodo } = useTodo()
    const [name, setName] = useState('')
    const add = () => {
        if (!name) return;
        const id = Date.now()

        addTodo({ id, name, completed: false })
        setName('')

    }

    return (
        <form onSubmit={add} className="w-full mx-2 bg-slate-300 p-2 flex justify-center items-center rounded">
            <input type="text" placeholder="Write task here" value={name} onChange={(e) => setName(e.target.value)} 
            className="text-black w-full bg-slate-100 " />
            <button type="submit" className="mx-2 px-2 transition active:scale-95  hover:bg-blue-400 cursor-pointer  border border-black rounded bg-blue-300" >Add</button>

        </form>
    )
}
export default InputAddTodo