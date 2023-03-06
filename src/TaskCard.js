import React from 'react'
import { Link } from 'react-router-dom'

function TaskCard({task}) {

  return (
    <Link to={`./tasks/${task.id}`}>
        <div className='card'>
            <div className='cardName'>{task.name}</div>
            <div className='cardDescription'>{task.description}</div>
            <div className='cardDate'>{task.date_due}</div>
            <div className='cardStatus'>{task.completed}</div>
        </div>
        
    </Link>
  )
}

export default TaskCard