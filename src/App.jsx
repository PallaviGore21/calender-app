import React from 'react'
import Todo from './pages/Todo'
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
// import ForgetPassword from './pages/ForgotPassword'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/newcalender" element={<NewCalender/>} />
      <Route path="/loginError" element={<LoginError/>} />
      <Route path='/welcome' element={<Protected compo={<Welcome />} />} />

      {/* <Route path="/forgotpas" element={<ForgetPassword/>} /> */}
    </Routes>
  </BrowserRouter>
}

export default App