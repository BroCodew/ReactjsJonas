import React, { useContext, useReducer, useState } from 'react'
import { TodoProvider } from '../index.tsx';
import { Button, Input } from 'antd';

const todoReducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [...state, { id: state.length + 1, name: action.name }];
    case "deleteTodo":
      const updateTodo = state.filter(item => item.id !== action.id)
      return [...updateTodo]
    case "editTodo":
    case "saveTodo":
      const saveTodo = state.map(item => {
        if (item.id === action.id) {
          return { ...item, name: action.saveValue }
        }
        return item;
      }
      )
      return saveTodo
    default:
      return state
  }
}

const TodoTask = () => {
  const [item, setItem] = useState("");
  const [editId, setEditId] = useState<any>()
  const [saveValue, setSaveValue] = useState("")
  const { todoList, setTodoList } = useContext(TodoProvider);

  const [state, dispatch] = useReducer(todoReducer, todoList);
  console.log("state", state);

  const handleAddTodo = () => {
    dispatch({
      type: "addTodo",
      name: item
    });
    setEditId(null)
  }
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "deleteTodo",
      id,
    })
  }

  const handleEditValue = (id) => {
    const taskToEdit = state.find(item => item.id === id);
    setEditId(id);
    setSaveValue(taskToEdit.name);
  }

  const handleSaveTodo = (id) => {
    dispatch({
      type: "saveTodo",
      id,
      saveValue,
    })
    setEditId(null)
  }


  return (
    <div>
      <Input value={item} onChange={(e) => setItem(e.target.value)} />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      {state.map(item =>
        <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
          {editId === item.id
            ? <Input value={saveValue} onChange={(e) => setSaveValue(e.target.value)} /> :
            <p style={{ marginRight: "10px" }}>
              {item.name}
            </p>
          }
          <Button onClick={() => handleDeleteTodo(item.id)}>Delete</Button>
          {editId === item.id ?
            <Button onClick={() => handleSaveTodo(item.id)}>Save </Button>
            :
            <Button onClick={() => handleEditValue(item.id)}>Edit</Button>
          }
        </div >
      )
      }
    </div >
  )
}

export default TodoTask
