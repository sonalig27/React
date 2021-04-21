import classes from "./App.module.css";
import Todos from "./Components/todos";
import { useState, useRef, Fragment } from "react";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [inputIsInvalid, setInputIsInvalid] = useState(false);
  const [hasTodos, setHasTodos] = useState(false);
  const inputRef = useRef();
  const inputChangeHandler = (event) => {
    const enteredTodo = inputRef.current.value;
    if (enteredTodo.trim() !== "") {
      setTodoInput(enteredTodo);
    }
  };
  const addTodoHandler = (event) => {
    event.preventDefault();
    if (todoInput.trim() === "") {
      setInputIsInvalid(true);
    }
    if (todoInput.trim() !== "") {
      setInputIsInvalid(false);
      setTodos((prevState) => {
        return [
          ...prevState,
          {
            id: `${todoInput}_${prevState.length + 1}`,
            name: todoInput,
            priority: 1,
          },
        ];
      });
      setTodoInput("");
      setHasTodos(true);
    }
  };

  const removeTodoHandler = (id) => {
    setInputIsInvalid(false);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    todos.length > 0 ? setHasTodos(true) : setHasTodos(false);
  };
  return (
    <Fragment>
      <header className={classes.header}>To-Do List App</header>
      <form className={classes.form} onSubmit={addTodoHandler}>
        <input
          type="text"
          ref={inputRef}
          onChange={inputChangeHandler}
          placeholder="Enter a New To-Do..."
          value={todoInput}
        />
        <button type="submit">+</button>
      </form>
      {inputIsInvalid && (
        <p className={classes.invalid}>
          Invalid Input, Please enter a value for the to-do!
        </p>
      )}
      {hasTodos && <Todos todos={todos} removeTodo={removeTodoHandler} />}
    </Fragment>
  );
}

export default App;
