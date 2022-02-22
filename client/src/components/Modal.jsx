import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const ModalComponent = ({ open, setIsOpen, children }) => {
  let navigate = useNavigate();
  const handleCloseModal = () => {
    setIsOpen(false);
    navigate("/Status");

  }

  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
        {/* <div>Payment Successfull!</div> */}
        <button onClick={handleCloseModal}>close</button>
      </Modal>
    </div>
  );
};

export default ModalComponent;