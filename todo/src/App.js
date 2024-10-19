import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import MainList from "./components/MainList";
function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const[error, setError] = useState('')

  // Add functionality to add new todo items to the list
  const addTodo = () => {
    if (todo.trim() === "") {
      setError(" ! Please enter a todo item."); // Optional: Show an alert
      return; // Stop the function if the input is empty
    }
    const newList = {
      id: uuidv4(),
      name: todo,
      completed: false,
    };
    setList([...list, newList]);
    setTodo("");
  };

  // Toggle the completion status of a todo item
  const handleToggleTodo = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setList(newList);
  };

  // Delete a todo item from the list
  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="list_wrapper">
        <div className="adder">
          <input
            type="text"
            id="item1"
            placeholder="Enter your task here"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <span onClick={addTodo}>+</span>
        {error && <p className="error">{error}</p>}
        </div>
        {list.length > 0 && (
          <MainList
            list={list}
            todo={todo}
            handleToggleTodo={handleToggleTodo}
            handleDelete={handleDelete}
            completed={list.completed}
          />
        )}
        <button className="btn-primary" onClick={() => setList([])}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
