import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const addRegisterAction = createAsyncThunk("users/add", async userData => {
    try {
        const { data } = await axios.post("http://localhost:5000/auth/register", userData)
        return data
    } catch (error) {
        return error.message
    }
})

// export const getRegisterAction = createAsyncThunk("users/get", async () => {
//     try {
//         const { data } = await axios.get("http://localhost:5000/users")
//         return data
//     } catch (error) {
//         return error.message
//     }
// })

// export const getuserLoginAction = createAsyncThunk("users/login", async () => {
//     try {
//         const { data } = await axios.post("http://localhost:5000/users")
//         return data
//     } catch (error) {
//         return error.message
//     }
// })

export const userLoginAction = createAsyncThunk("users/login", async (loginData,{rejectWithValue}) => {
    try {
        const { data } = await axios.post("http://localhost:5000/auth/login",loginData)
        // let result = data.find(item=> item.email===loginData.email && item.password === loginData.password)
        
        
        // localStorage.setItem("login", JSON.stringify(data))
        return data.result
        
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

