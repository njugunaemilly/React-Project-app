import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'

const Tasks = ({tasks, setTasks, fetchProject, boards,currentBoardId,}) => 
{
  const [completedTasks, setCompletedTasks] = useState(
    tasks 
    ? tasks
    .filter((task)=> task.completed === true)
    .sort((a,b)=> Date(a.date_due)- Date(b.date_due))
    :[]
  )

  const [incompleteTasks, setInCompleteTasks] = useState(
    tasks
    ? tasks   
    .filter((task)=> task.completed === false)
    .sort((a,b)=> Date(a.date_due)- Date(b.date_due))
    :[]
)
  useEffect(()=> {setCompletedTasks(
    tasks
    ? tasks
    .filter((task)=> task.completed === true)
    .sort((a,b)=> Date(a.date_due)- Date(b.date_due))
    :[]
  )
    setInCompleteTasks(
      tasks
      ? tasks
      .filter((task)=> task.completed === false)
      .sort((a,b)=> Date(a.date_due)- Date(b.date_due))
    :[]
    )
}, [tasks])

const newTaskOrder = [incompleteTasks,completedTasks].flat()

const completeTask = (task) => {
  const updatedTask = { ...task, completed: !task.completed }

  updateTask(updatedTask)
}

const updateTask = (updatedTask) => {
  let updatedTasks
  if (updatedTask.board_id === currentBoardId) {
    updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
  } else {
    updatedTasks = tasks.filter((task) => task.id !== updatedTask.id)
  }

  fetch(`/${updatedTask.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type' : 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      board_id: updateTask.board_id,
      completed: updatedTask.completed,
      description: updatedTask.description,
      date_due: updatedTask.date_due,
      name: updatedTask.name,
    })
  }).then(()=> {
    if (updatedTask.board_id !== currentBoardId) {
      fetchProject()
    }
  })
  setTasks(updatedTasks)
  }
  const handleDeleteTask = (deleteTask) => {
    const updatedTasks = tasks.filter((task) => task.id !== deleteTask.id)

    fetch(`/api/tasks/${deleteTask.id}`, {
      method: 'DELETE',
    })
    setTasks(updatedTasks)
  }
  
  return(
    <div>
      <div className='container'>
        {newTaskOrder.length !==0 ? (
          newTaskOrder.map((task)=> (
            <TaskCard
            task={task}
            key={`task-${task.id}`}
            boards={boards}
            currentBoardId={currentBoardId}
            completeTask={completeTask}
            updateTask={updateTask}
            handleDeleteTask={handleDeleteTask}
            />
          ))
        )
        : (                
          <div className='card-grid'>{}</div>
        )
}</div> 
    </div>
        )
  }

export default Tasks