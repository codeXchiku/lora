import React from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllNodes from './pages/AllNodes'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import GateWay from './pages/GateWay'
const App = () => {
  return (
    <>
    <div className='m-0 p-0 h-screen w-screen'>
    <div className='border-4 border-purple-500 min-h-full w-full box-border'>
      <BrowserRouter>
        <Navbar/>
        <Sidebar/>
      <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/Allgateway'element={<GateWay/>}/>
    <Route path='/Allnode' element={<AllNodes/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
    </>
  )
}

export default App