import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header/Header";
import CreateTodo from "./components/Todo/CreateTodo";
import TodoList from "./components/Todo/TodoList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  function addTodoHandler(todo) {
    setTodoList((prevTodoList) => {
      return [todo, ...prevTodoList];
    });
  }
  function deleteHandler(id) {
    let todoCopy = [...todoList];
    let itemIndexToDelete = todoCopy.findIndex((todoItem) => {
      return todoItem.id === id;
    });
    todoCopy.splice(itemIndexToDelete, 1);
    setTodoList([...todoCopy]);
  }
  return (
    <Container fluid="true">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <CreateTodo onCreateTodo={addTodoHandler} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TodoList todos={todoList} onDelete={deleteHandler} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
