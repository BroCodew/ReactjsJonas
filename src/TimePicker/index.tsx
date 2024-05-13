import React, { useState } from 'react'
import { Button, Input } from '@chakra-ui/react'

const TimePicker = () => {
  const [todoList, setTodoList] = useState('')
  const [tasks, setTasks] = useState<any>([{ id: 1, name: "Learn Reactjs" }])
  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')

  const handleChangeValue = (e) => {
    setTodoList(e.target.value)
  }

  const handleAddTask = () => {
    const newId = tasks.length > 0 ? Math.max(...tasks.map(item => item.id)) + 1 : 1
    setTasks(prev => [...prev, { id: newId, name: todoList }])
    setTodoList('') // Clear input after adding
  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id))
  }

  const handleEditTask = (id) => {
    const task = tasks.find(item => item.id === id);
    setEditingId(id)
    setEditValue(task.name)
  }

  const handleSaveEdit = (id) => {
    const updateTask = tasks.map(item => {
      if (item.id === id) {
        return { ...item, name: editValue }
      }
      return item
    })
    setEditingId(null)
    setTasks(updateTask)
  }

  return (
    <div>
      <Input value={todoList} onChange={handleChangeValue} placeholder="Add a new task" />
      <Button colorScheme="yellow" onClick={handleAddTask}>Add Task</Button>
      {tasks.map(item => (
        <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {editingId === item.id ? (
            <Input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
          ) : (
            <p>{item.name}</p>
          )}
          <Button colorScheme="blue" onClick={() => handleDeleteTask(item.id)}>Delete Task</Button>
          {editingId === item.id ? (
            <Button onClick={() => handleSaveEdit(item.id)}>Save</Button>
          ) : (
            <Button onClick={() => handleEditTask(item.id)}>Edit Task</Button>
          )}
        </div>
      ))}
    </div>
  )
}

export default TimePicker
