import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as yup from "yup"
import { addRegisterAction } from '../redux/signup/registerAction';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';


const Register = () => {

    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    const dispatch=useDispatch()
    const { Useradded } = useSelector(state => state.allusers)
    const navigate=useNavigate()
    const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

const formik = useFormik({
    initialValues: {
        firstName:"",
        lastName:"",
        email:"",
        Address:"",
        country:"",
        gender:"",
        phone:"",
        password:"",
        cpassword:""
    },
    validationSchema: yup.object({
        firstName: yup.string().required("Please Enter firstName"),
        lastName: yup.string().required("Please Enter lastName"),
        email: yup.string().required("Please Enter email").email("please enter a valid email"),
        Address: yup.string().required("Please Enter Address"),
        country: yup.string().required("Please Enter country"),
        gender: yup.string().required("Please Enter gender"),
        phone: yup.string().required("Please Enter phone").min(8, "please enter min 8 charaacters").max(10, "please enter 10 numbers"),
        password: yup.string().required("Please Enter password").min(8, "please enter min 8 charaacters"),
        cpassword: yup.string().required("enter Confirm password").oneOf([yup.ref("password")], "password do not match")
    }) ,  
    onSubmit: ( values,{ resetForm }) => {
        console.log(values);
        dispatch(addRegisterAction(values))
        resetForm()
    }

})
   
useEffect(() => {
 if(Useradded){
    navigate("/")
 }
}, [Useradded])

   
  return<>
   {/* {JSON.stringify(formik.values)} */}
            {JSON.stringify(formik.errors)}
            {/* {JSON.stringify(formik.touched)} */}
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
            <h4 className='text-center'>Signup</h4>
        <TextField  
        label={<PersonIcon/> } 
        onBlur={formik.handleBlur}
        className={formik.errors.firstName && formik.touched.firstName ? "form-control is-invalid" : "form-control"}
        type="text"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
         placeholder="firstName"/>
           <span className='invalid-feedback'>
                {formik.errors.firstName}
            </span>
      <br />
      <TextField  
        label={<PersonIcon/> } 
        onBlur={formik.handleBlur}
        className={formik.errors.lastName && formik.touched.lastName ? "form-control is-invalid" : "form-control"}
        type="text"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
         placeholder="lastName"/>
           <span className='invalid-feedback'>
                {formik.errors.lastName}
            </span>
            <br />
     <TextField  
     label={ <MarkunreadIcon/>}
        onBlur={formik.handleBlur}
        className={formik.errors.email && formik.touched.email ? "form-control is-invalid" : "form-control"}

        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      placeholder="email"/>
        <span className='invalid-feedback'>
                {formik.errors.email}
            </span>
      <br />
      <TextField  
        label={<PersonIcon/> } 
        onBlur={formik.handleBlur}
        className={formik.errors.Address && formik.touched.Address ? "form-control is-invalid" : "form-control"}
        type="text"
        name="Address"
        value={formik.values.Address}
        onChange={formik.handleChange}
         placeholder="Address"/>
           <span className='invalid-feedback'>
                {formik.errors.Address}
            </span>
<br/>
<TextField  
        label={<PersonIcon/> } 
        onBlur={formik.handleBlur}
        className={formik.errors.phone && formik.touched.phone ? "form-control is-invalid" : "form-control"}
        type="text"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
         placeholder="phone"/>
           <span className='invalid-feedback'>
                {formik.errors.phone}
            </span>
<br/>

            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">country</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    className={formik.errors.country && formik.touched.country ? "form-control is-invalid" : "form-control"}
    type='country'
    name='country'
    value={formik.values.country}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    label="country"
  >
    <MenuItem value="india">india</MenuItem>
    <MenuItem value="china">china</MenuItem>
    <MenuItem value="australia">australia</MenuItem>
  </Select>
</FormControl>
<br/>

{/* radio */}
<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        className={formik.errors.gender && formik.touched.gender ? "form-control is-invalid" : "form-control"}
        type='gender'
        name="gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        // name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

<br/>
      <Box className="filed">
<Box>

      <TextField 
       label={<LockResetIcon/>}  
       onBlur={formik.handleBlur}
       className={formik.errors.password && formik.touched.password ? "form-control is-invalid" : "form-control"}
       
       type={passwordVisible ? 'text' : 'password'}
       
       name="password"
       value={formik.values.password}
       onChange={formik.handleChange}
       placeholder="password"
       />
       <br/>
       <br/>
         <TextField 
       label={<LockResetIcon/>}  
       onBlur={formik.handleBlur}
       className={formik.errors.cpassword && formik.touched.cpassword ? "form-control is-invalid" : "form-control"}
       
       type={passwordVisible ? 'text' : 'cpassword'}
       
       name="cpassword"
       value={formik.values.cpassword}
       onChange={formik.handleChange}
       placeholder="cpassword"
       />
       </Box>

       <Box>
        <button type="button" onClick={togglePasswordVisibility}>
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
       </Box>
         <span className='invalid-feedback'>
                {formik.errors.password}
            </span>
       </Box>
      <br/>
     


    <Button  disabled={!formik.isValid}  type='submit' variant="contained">
        Register
      </Button>
     
      <p class="text-center mt-3">
                Already Have Account? <Link to="/login">Login</Link>
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
export default Register

