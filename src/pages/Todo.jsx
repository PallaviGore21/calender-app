import React from 'react'

const Todo = () => {
  return (
    <div>Todo</div>
  )
}

export default Todo

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Todo = () => {
//     const [todos, setTodos] = useState()
//     const [task, setTask] = useState("")
//     const [selectedTask, setSelectedTask] = useState({
//         task: ""
//     })
//     const createTodo = async () => {
//         try {
//             const { data } = await axios.post("http://localhost:5000/todos", {
//                 task,
//                 complete: false
//             })
//             readTodos()
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     const readTodos = async () => {
//         try {
//             const { data } = await axios.get("http://localhost:5000/todos")
//             setTodos(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     const updateTodo = async (id, todoData) => {
//         try {
//             const { data } = await axios.patch(`http://localhost:5000/todos/${id}`, todoData)
//             readTodos()
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     const deleteTodo = async id => {
//         try {
//             const { data } = await axios.delete(`http://localhost:5000/todos/${id}`)
//             readTodos()
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     useEffect(() => {
//         readTodos()
//     }, [])

//     const todoTable = <table class="table table-dark table-striped table-hover">
//         <thead>
//             <tr>
//                 <th>Task</th>
//                 <th>Complete</th>
//                 <th>Actions</th>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 todos && todos.map(item => <tr key={item.id}>
//                     <td>{item.task}</td>
//                     <td>{
//                         item.complete
//                             ? <strong className='text-success'>Complete</strong>
//                             : <strong className='text-danger'>In Progress</strong>
//                     }

//                         <input
//                             type="checkbox"
//                             checked={item.complete}
//                             onChange={e => updateTodo(item.id, { complete: e.target.checked })}
//                             className='form-check-input mx-4' />
//                     </td>
//                     <td>
//                         <button type="button"
//                             class=" mx-2 btn btn-outline-warning"
//                             data-bs-toggle="modal"
//                             data-bs-target="#editModal"
//                             onClick={e => setSelectedTask(item)}
//                         >
//                             <i className='bi bi-pencil'></i>
//                         </button>
//                         <button type="button" class=" mx-2 btn btn-outline-danger" onClick={e => deleteTodo(item.id)}>
//                             <i className='bi bi-trash'></i>
//                         </button>
//                     </td>
//                 </tr>)
//             }
//         </tbody>
//     </table>
//     return <div className='container'>
//         <button
//             type="button"
//             data-bs-toggle="modal"
//             data-bs-target="#createTodoModal"
//             class="btn btn-primary my-3" >Create</button>
//         {todoTable}
//         <div class="modal fade" id="editModal">
//             <div class="modal-dialog">
//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
//                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div class="modal-body">
//                         <input
//                             type="text"
//                             className='form-control'
//                             onChange={e => setSelectedTask({ ...selectedTask, task: e.target.value })}
//                             value={selectedTask.task} /> <br />
//                         <button
//                             type="button"
//                             data-bs-dismiss="modal"
//                             onClick={e => updateTodo(selectedTask.id, { task: selectedTask.task })}
//                             class="btn btn-warning w-100 btn-lg">
//                             Update Todo
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </div>



//         <div class="modal fade" id="createTodoModal">
//             <div class="modal-dialog">
//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div class="modal-body">
//                         <input type="text" onChange={e => setTask(e.target.value)} />
//                         <button
//                             onClick={createTodo}
//                             data-bs-dismiss="modal"
//                             type="button"
//                             class="btn btn-primary">add Todo</button>
//                     </div>

//                 </div>
//             </div>
//         </div>

//     </div>
// }

// export default Todo

