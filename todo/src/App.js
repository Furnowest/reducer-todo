import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState} from "./Reducer/Reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [{todo},dispatch] =useReducer(reducer, initialState);
console.log(todo)



  return (
    <div className="App">
     <h1>Reducer Todo</h1>
     <TodoForm dispatch = {dispatch}/>
     <TodoList dispatch ={dispatch} state= {todo}/>
    </div>
  );
}

export default App;
