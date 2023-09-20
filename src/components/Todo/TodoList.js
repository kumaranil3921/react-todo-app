import TodoItem from "./TodoItem";
function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            title={todo.title}
            description={todo.description}
            id={todo.id}
            onDeleteHandler={props.onDelete}
          />
        );
      })}
    </div>
  );
}
export default TodoList;
