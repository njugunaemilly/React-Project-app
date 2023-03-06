import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './Board'
// import Home from './Home'
import Layout from './Layout'
import Project from './Project'
import Tasks from './Tasks'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={}/> */}
        <Route index element={<Layout/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/board' element={<Board/>}/>
        <Route path='/task' element={<Tasks/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App