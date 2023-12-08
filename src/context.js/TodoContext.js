import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [{
        id: 1,
        name: 'pp',
        completed: false
    }],
    addTodo:()=>{},
    deleteTodo:()=>{},
    updateTodo:()=>{},
    toggleComplete:()=>{},
    
})
export const useTodo=()=>useContext(TodoContext)
export const TodoProvider=TodoContext.Provider