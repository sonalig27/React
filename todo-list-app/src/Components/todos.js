import classes from "./todos.module.css";
import Card from "./Card";

const todos = (props) => {
  const todoList = (
    <Card>
      {props.todos.map((todo) => (
        <p key={todo.id} className={classes.todo}>
          {todo.name}
          <span>
            <button onClick={() => props.removeTodo(todo.id)}>done</button>
          </span>
        </p>
      ))}
    </Card>
  );

  return (
    <section className={classes.todos}>
      {props.todos.length > 0 && todoList}
    </section>
  );
};

export default todos;
