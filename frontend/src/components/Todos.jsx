import React from 'react'
import axios from "axios"
import "../styles/Todo.css"
// import { } from 'react-router-dom'

export const Todo = () => {

   const [task,setTask]=React.useState("")
   const [tag,setTag]=React.useState("")
   const [todos,setTodos]=React.useState([])

   const fetchTodo=()=>{


    axios({
        method:"get",
        url:"http://localhost:8000/todos"

    })
    .then((res)=>{setTodos(setTodos(res.data))})
    .catch((err)=>{window.alert("something went wrong")})
   }
    
//    fetchTodo()
   React.useEffect(()=>{fetchTodo()},[])

    function addTodo() {
        // console.log(task, tag)
        let payload={
            task,
            status:false,
            tag
        }
        axios({
            method: "post",
            url: "http://localhost:8000/todo",
            // headers:{
            // "Content-type":"application/json"},
            data: payload
        })
            .then((res) => { setTodos(res.data) })
            .catch((err) => console.log(err))

        window.alert("task added")
    }
  return (
    <div>
    <div id="todo">
        <h1>Add Todos</h1>
       <form>
        <input type={"text"} placeholder={"add todo"} value={task} onChange={(e)=>{setTask(e.target.value)}}></input><br/>
        <input type={"text"} placeholder={"add tag (ex: personal,family)"} value={tag} onChange={(e)=>{setTag(e.target.value)}}></input><br/>
        <input type={"button"} value={"ADD"} onClick={addTodo}></input>
       </form>
    </div>
    <div id="display">
       <table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>

            </tr>
        </thead>
        <tbody>
            {
                todos.map((item)=>{return (<tr>
                    <td>{item.task}</td>
                    <td>{item.status}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>

                </tr>)})
            }
        </tbody>
       </table>
    </div>
    </div>
  )
}
