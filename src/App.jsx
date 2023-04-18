import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Login from './pages/Login'
import Register from './pages/register'
import Dashboard from './pages/Dashboard'
import Welcome from './pages/Welcome'
import Protected from './pages/Protected'
import "./App.css";
import LoginError from './pages/loginError'
import NewCalender from './pages/NewCalender'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/newcalender" element={<NewCalender/>} />
      <Route path="/loginError" element={<LoginError/>} />
      <Route path='/welcome' element={<Protected compo={<Welcome />} />} />

    </Routes>
  </BrowserRouter>
}

export default App