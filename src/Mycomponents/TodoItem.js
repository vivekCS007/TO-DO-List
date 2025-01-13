import React from 'react'

const TodoItem = ({ todo, onDelete, isDeleted }) => {
  if (isDeleted) {
    return <p>Deleted</p>;
  }

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      <br />
      <br />
    </div>
  )
}

export default TodoItem