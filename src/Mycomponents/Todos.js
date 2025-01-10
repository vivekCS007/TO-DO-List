import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const Todos = (props) => {
  return (
    <div className='container'>
      <h3>Todos list</h3>
      {props.todos.length === 0 ? "No todos to display" : "Displaying todos"}
      <br />
      <br />
      {props.todos.map((todo) => {
        return (
          <TodoItem
            key={todo.sno} 
            todo={todo}
            onDelete={() => props.onDelete(todo)}
          />
        )
      })}
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Todos
