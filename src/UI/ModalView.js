import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalView(props) {
  return (
    <div className="modal show" style={{ display: "block" }}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={props.onClose}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.message}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalView;
