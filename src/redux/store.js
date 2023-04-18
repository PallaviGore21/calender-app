import {configureStore} from '@reduxjs/toolkit'
import registerSlice from './signup/registerSlice'

const store = configureStore({
   reducer:{
      allusers: registerSlice,
   }
})
export default store