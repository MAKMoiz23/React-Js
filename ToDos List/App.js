import './App.css';
import Header from './My Components/Header';
import Footer from './My Components/Footer';
import ToDos from './My Components/ToDos';
import React, { useState } from 'react';
import AddTodo from './My Components/addToDo';


function App() {
  const [sno, setsno] = useState(1)
  function addToDo(title, desc) {
    // let sno = todos[todos.length-1].sNo +1;
    const objInsert = {sNo: sno,
    title: title,
    desc: desc}
    setTodos([...todos, objInsert]);
    console.log(todos);
    setsno(sno+1);
    }

  function onDelete(todo) {
    
    setTodos(todos.filter((e)=>{
      //creates new array which contains element on which the condition is true
      //and skips the one having fales
      return e!==todo;
    })
    )
  }

  const [todos, setTodos] = useState([]);
  
  return (
    <>
      <Header title="My ToDos List" searchBar = {false}/>
      <AddTodo addToDo = {addToDo}/>
      <ToDos todos = {todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
