import React from "react";
// import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'


// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)"
//   }
// };

// const ModalComponent = ({ open, setIsOpen, children }) => {
//   let navigate = useNavigate();
//   const handleCloseModal = () => {
//     setIsOpen(false);
//     navigate("/Status");

//   }

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