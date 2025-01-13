import React from 'react'
import { useState } from 'react'
const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div classNameName='container my-3 ' style={{width:"50%",margin:"auto"}}>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} className="form-control" id="title"  onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="test" value={desc} className="form-control" id="desc" onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add todo</button>
            </form>
        </div>
    )
}

export default AddTodo
