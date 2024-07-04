import React, { useState } from "react";

const AddTodo = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");


    const submit = (e)=>{
        e.preventDefault()
        if (!title || !desc) {
            alert("Title or Desc not be Empty..")
        }else{
            addTodo(title,desc);
        }
    }
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="form-control"
            placeholder="Enter Title"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            placeholder="Enter Description"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary text-slate-900 mt-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
