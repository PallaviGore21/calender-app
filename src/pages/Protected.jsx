import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const Protected = ({compo}) => {
  const {login}= useSelector(state=>state.allusers)
  
  // console.log(userlogin ? "yes":"no");
  // return login ? element : {}
  return login ? compo : <Navigate to="/login" />

}
export default Protected