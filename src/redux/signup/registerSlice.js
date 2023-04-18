
import { createSlice } from "@reduxjs/toolkit"
import { addRegisterAction, userLoginAction } from "./registerAction"

// const localLoginData = localStorage.getItem("login")
//     ? JSON.parse(localStorage.getItem("login"))
//     : null
const RegisterSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        // login: localLoginData
    },
    reducers: {  
        logout(state){
            // localStorage.removeItem("login")
            // state.login = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(addRegisterAction.pending, (state, { payload }) => {
                state.loading = false
            })
            .addCase(addRegisterAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.Useradded = true
            })
            .addCase(addRegisterAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            // .addCase(getRegisterAction.pending, (state, { payload }) => {
            //     state.loading = false
            // })
            // .addCase(getRegisterAction.fulfilled, (state, { payload }) => {
            //     state.loading = false
            //     state.users = payload
            // })
            // .addCase(getRegisterAction.rejected, (state, { payload }) => {
            //     state.loading = false
            //     state.error = payload
            // })

            .addCase(userLoginAction.pending, (state, { payload }) => {
                state.loading = false
            })
            .addCase(userLoginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.login = payload
            })
            .addCase(userLoginAction.rejected, (state, { payload }) => {
                state.loading = false
                state.LoginError = payload
            })

        

           
    }
})
export default RegisterSlice.reducer
export const {logout} = RegisterSlice.actions


