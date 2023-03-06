// import React, { useEffect, useState } from 'react'

function Board() {
//     const {name, id} = board
//     const [tasks, setTasks] = useState([])
//     useEffect(() =>{
//     setTasks(board.tasks)
// },[board])

// const handleCreateTask = (newTask) =>{
//     fetch ('/http://localhost:9293/task/',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             accept: 'application/json'
//         },
//         body: JSON.stringify({
//             // board_id,
//             completed: newTask.completed,
//             description: newTask.description,
//             date_due: newTask.date_due,
//             name: newTask.name,

//         }),
//     })
//     .then((res)=> res.json())
//     .then((data) => {
//         if (tasks.length === 0) {
//             setTasks([data])
//         }
//         else
//         {
//             setTasks((prevTasks) => {
//                 return[...prevTasks, data]
//             })
//         }
//     })
// }

  return (
    <div>
        <div className="card">
            {/* <h5 className="card-header">Board Name</h5> */}
            <div className="card-body">
            <h5 className="card-title">Board</h5>
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            <a href="/task" className="btn btn-primary ">Tasks</a>
            </div>
        </div>
    </div>
  )
}

export default Board