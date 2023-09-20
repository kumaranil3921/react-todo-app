import { useState } from "react";
import ModalView from "../../UI/ModalView";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  function validateTodo() {
    if (!title) {
      setError(true);
      return false;
    }
    return true;
  }
  function todoResetHandler() {
    setTitle("");
    setDescription("");
  }
  function todoSubmitHandler(event) {
    event.preventDefault();
    if (!validateTodo()) {
      return;
    }
    props.onCreateTodo({
      id: Math.random().toString(),
      title,
      description,
    });
    setTitle("");
    setDescription("");
  }
  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function descriptionChangeHandler(event) {
    setDescription(event.target.value);
  }
  return (
    <div>
      {" "}
      {error && (
        <ModalView
          message={"Title is required"}
          title={"Error"}
          onClose={() => setError(false)}
        />
      )}
      <Container fluid>
        <Row>
          <Col>
            <Form onSubmit={todoSubmitHandler}>
              <Form.Group className="mb-1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="test"
                  placeholder="book tickets"
                  value={title}
                  onChange={titleChangeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={descriptionChangeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Button
                  variant="secondary"
                  type="reset"
                  onClick={todoResetHandler}
                >
                  Cancel
                </Button>{" "}
                <Button variant="success" type="submit">
                  Submit
                </Button>{" "}
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateTodo;
