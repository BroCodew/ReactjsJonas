import React, { createContext, useState } from 'react'
import TodoTask from './components/TodoTask'

export const TodoProvider = createContext({})
const TodoList = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Learn React"
    }
  ])


  return (
    <TodoProvider.Provider value={{ todoList, setTodoList }}>
      <TodoTask />
    </TodoProvider.Provider>
  )
}

export default TodoList
