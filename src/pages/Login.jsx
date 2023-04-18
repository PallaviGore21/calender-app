import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useFormik } from 'formik';
import * as yup from "yup"
import { useNavigate } from 'react-router';
import { userLoginAction } from '../redux/signup/registerAction';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
  const navigate=useNavigate()
const dispatch =useDispatch()
const { login,LoginError } = useSelector(state => state.allusers)

const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };
useEffect(() => {
//  dispatch(getRegisterAction())
}, [])

const formik = useFormik({
  initialValues: {
      email:"",
      password:"",
     
  },
  validationSchema: yup.object({
      email: yup.string().required("Enter email"),
      password: yup.string().required("Enter password"),
  }) ,  
  onSubmit: ( values,{ resetForm }) => {
      console.log(values);
      dispatch(userLoginAction(values))
      resetForm()
      
  }
})

useEffect(() => {
 if(login){
    navigate("/welcome")
 }else if(LoginError){
    navigate("/loginError")
 }
}, [login,LoginError])


 
  return <>
  {JSON.stringify(LoginError)}<br/>
  <form onSubmit={formik.handleSubmit}>
 <div className='container'>
    <div className='row'>
        <div className="col-sm-3"></div>
        <div className="col-sm-8">

  <Box
      sx={{
          width: 500,
          maxWidth: '100%',
        }}
        >
        <div className='card p-4 mt-5 '>
            <h4 className='text-center'>Login</h4>
      
     <TextField  
     label={ <MarkunreadIcon/>}
        onBlur={formik.handleBlur}
        className={formik.errors.email && "form-control is-invalid"}

        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      placeholder="email"/>
        <span className='invalid-feedback'>
                {formik.errors.email}
            </span>
      <br />
      <Box className="filed">
        <Box>
      <TextField
       label={<LockResetIcon/>}  
        onBlur={formik.handleBlur}
        className={formik.errors.password && "form-control is-invalid"}

        type={passwordVisible ? 'text' : 'password'}
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="password"/>
        </Box>
        <br />
        <Box>
        <button type="button" onClick={togglePasswordVisibility}>
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
        </Box>
      </Box>
        <span className='invalid-feedback'>
                {formik.errors.password}
            </span>
      <br />
      <Button disabled={!formik.isValid}  color='success' type='submit' variant="contained">
        Login
      </Button>
        

      <br />
      
      <p class="text-center mt-3">
                Dont Have Account? <Link to="/register">Create Account</Link>
              </p>
              <p class="text-center mt-3">
                 <Link to="/forgotpas">forgot password</Link>
              </p>
        </div>
    </Box>
        </div>
            </div>
            </div>
  <br /><br />
  </form>
  
  </>
}

export default Login