import React from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
 

  return (
    <>
    <h1 className="text-3xl font-black flex items-center justify-center-safe">Learn About  Redux Toolkit</h1>
    <AddTodo />
    <Todos />


    </>
  )
}

export default App
