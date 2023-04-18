// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { ForgetPasswordAction } from '../redux/users/actions/authAction'

// const ForgetPassword = () => {
//     const [email, setEmail] = useState("pallavigore21@gmail.com")
//     const dispatch= useDispatch()
//   return <>
  
//   <div class="card">
//     <div class="card-header">Forget Password</div>
//     <div class="card-body">
//         <input 
//         type="text"
//         value={email}
//         onChange={e=>setEmail(e.target.value)}
//          className='form-control' />
//     </div>
//     <button onClick={e=>dispatch(ForgetPasswordAction({email}))}>Submit</button>
//   </div>
  
//   </>
// }

// export default ForgetPassword

import React from 'react'

const ForgotPassword = () => {
  return (
    <div>ForgotPassword</div>
  )
}

export default ForgotPassword