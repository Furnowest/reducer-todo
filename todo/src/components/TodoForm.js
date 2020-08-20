import React, { useState } from "react";



export const TodoForm = ({dispatch}) => {
		

    const [newToDo, setNewTodo] = useState("");
  

    const handleChanges = (e) => {
      setNewTodo(e.target.value);
    };
  

    return (
      <div>
        <label className='sronly' >Todo :</label>
        <input
          className="todoInput"
          placeholder='My todo'
          type="text"
          name="newTodoInput"
          onChange={handleChanges}
          value={newToDo}
        />
        <button onClick={() => dispatch({ type: "ADD_TODO", payload:newToDo})}>
          Add Todo!
        </button>
      </div>
    );
  };
  

  export default TodoForm 
