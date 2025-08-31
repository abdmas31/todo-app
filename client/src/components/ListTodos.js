// ✅ Imports always at the very top
import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
  

    const ListTodos = () => {
    const [todos, setTodos] = useState([]);
        const deleteTodo = async(id)=>{
            try {
                const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                    method: "DELETE"    
                });

                setTodos(todos.filter(todo => todo.todo_id !== id));
            } catch (err) {
                console.error(err.message);
            }   
        };
    const getTodos = async () => {
        try {
        const response = await fetch("http://localhost:5000/todos");
        const jsonData = await response.json();
        setTodos(jsonData);
        } catch (err) {
        console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

  return (
    <Fragment>
      <div className="container mt-5">
        <h2 className="text-center mb-4">My Todo List</h2>
        <div className="table-responsive shadow-sm rounded">
          <table className="table table-hover table-striped align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.todo_id}>
                  <td className="fw-semibold">{todo.description}</td>
                  <td>
                    <EditTodo todo = {todo}></EditTodo>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={()=> deleteTodo(todo.todo_id)}>🗑️ Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

// ✅ Export always at the very bottom
export default ListTodos;
