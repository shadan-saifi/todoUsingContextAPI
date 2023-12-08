import { useEffect, useState } from "react"
import { TodoProvider } from "./context.js"
import { InputAddTodo, TodoItem } from "./components/index.js"


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    console.log('addzTodo:', todo);
    setTodos((prev) => [todo, ...prev])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prev) => (prev.id === id ? todo : prev)))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prev) => prev.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prev) => prev.id === id ? { ...prev, completed: !prev.completed } : prev))
  }

  useEffect(() => {
    const storetodos = JSON.parse(localStorage.getItem('todos'));
    if (storetodos && storetodos.length > 0) setTodos(storetodos)

    console.log('storedTodos:', storetodos);
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  console.log('Todos:', todos);



  return (
    <TodoProvider value={{ toggleComplete, addTodo, deleteTodo, updateTodo, todos }}>

      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 flex justify-center items-center flex-col ">
        <div className="text-2xl m-4 mt-10 p-2">Task Manager</div>
        <InputAddTodo />
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}

        </div>

      </div>
    </TodoProvider>

  )
}

export default App
