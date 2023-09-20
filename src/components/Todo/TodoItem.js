import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function TodoItem(props) {
  function deleteHandler(id) {
    props.onDeleteHandler(id);
  }
  return (
    <Card key={props.id}>
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
        </Button>
      </Card.Body>
    </Card>
  );
}
export default TodoItem;
