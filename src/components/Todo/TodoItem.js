import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function TodoItem(props) {
  function deleteHandler(id) {
    props.onDeleteHandler(id);
  }
  function completeHandler(id) {
    props.onCompleteHandler(id);
  }
  return (
    <Card
      key={props.id}
      style={{
        borderColor: `${props.completed ? "green" : ""}`,
        backgroundColor: `${props.completed ? "lightgreen" : ""}`,
      }}
    >
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button
          variant="danger"
          onClick={() => {
            deleteHandler(props.id);
          }}
        >
          Delete
        </Button>{" "}
        <Button
          variant="success"
          onClick={() => {
            completeHandler(props.id);
          }}
        >
          Complete
        </Button>
      </Card.Body>
    </Card>
  );
}
export default TodoItem;
