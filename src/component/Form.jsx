import { useState } from "react";
import "./Form.css";


function Form({setData}) {
    const [newTodo, setNewTodo] = useState({
        todo: "",
        language: "",
        status: ""
      })
    
      const handleChange = (e) =>{
        const {name,value} = e.target;
        setNewTodo({
          ...newTodo,
          [name]:value
        })
      }
    
      const handleSubmit = (e) =>{
        e.preventDefault();
        const obj = {
          id: Date.now() + Math.random(),
          ...newTodo
        }
        // console.log(obj)
        setData((prevTodo)=>[...prevTodo, obj])
        setNewTodo({
          todo: "",
          language: "",
          status: ""
        })
      }
    return ( 
        <div className="form-wrapper">
          <form action="" className='form' onSubmit={handleSubmit}>
            <label htmlFor="todo">
              Task: <input type="text" name='todo' className='todo' placeholder='Enter Todo...' value={newTodo.todo} onChange={handleChange}/>
            </label>
            <label htmlFor="language">
              Language: <input type="text" name='language' onChange={handleChange} 
               value={newTodo.language} className='language' placeholder='Enter JS, React, Node....'/>
            </label>
            <select name="status" id="status" onChange={handleChange}value={newTodo.status} >
              <option value="">Status</option>
              <option value="Todo">Todo</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            <input type="submit" value="Add Todo" className='submit-btn' />
          </form>
        </div>
     );
}



export default Form;