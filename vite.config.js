import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// const {login}= useSelector(state=>state.allusers)
// <div>{login.message}</div>