import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
  let navigate = useNavigate();
  const handleCloseModal = () => {
    props.onHide()
    navigate("/Status");
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Sucess!</h4>
        <p>
          Your payment has been successfully processed.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;