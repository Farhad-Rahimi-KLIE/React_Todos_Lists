import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';
import AddTodo from './AddTodo'
const Todos = () => {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo = (title,desc)=>{
    let sno;
    if (todos.length===0) {
      sno = 0;
    }else{
    let sno = todos[todos.length-1].son +1;
    }
    let nytodos = {
      sno : sno,
      title : title,
      desc : desc,
    }
    setTodos([...todos,nytodos])
  }
const [todos,setTodos] = useState(initTodo);
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos])
  return (
    <>
    <AddTodo addTodo={addTodo}/>
    <div className='container'>
      <h3 className='text-center mt-1 font-sans text-lg'>Todos List</h3>
    </div>
    {
      todos.length===0 ? "No Todos to Display" :
      todos.map((Elem,index)=>{
        return <TodoItem key={index} todo={Elem} onDelete={onDelete}/>
      })
    }
    </>
  )
}

export default Todos
