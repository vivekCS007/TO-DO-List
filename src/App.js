import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Mycomponents/Header";
import Footer from './Mycomponents/Footer';
import Todos from './Mycomponents/Todos';
import AddTodo from './Mycomponents/AddTodo';

function App() {
  // const [todos, setTodos] = useState([]);
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  }
  else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("item deleted ", todo);
    setTodos(todos.filter((t) => t.sno !== todo.sno));
    localStorage.setItem("todos", JSON.stringify(todos));
  };


  const addTodo = (title, desc) => {
    console.log("Adding todo", title, desc);
    if (todos.length === 0) {
      const myTodo = {
        sno: 1,
        title: title,
        desc: desc
      }
      setTodos([...todos, myTodo]);
    }
    else {
      let sno = todos[todos.length - 1].sno + 1;
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc
      }
      console.log(myTodo);
      setTodos([...todos, myTodo]);
    }
  };
    const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Header title="Vivek Todo List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <main className="flex-grow-1">
        <Todos todos={todos} onDelete={onDelete} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
