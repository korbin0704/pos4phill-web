import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React from "react";
import Payment from "../Payment";

const PaymentPopup = ({ isOpen, onClose }) => {

  const toggleModal = result => {
    onClose?.(result);
  }

  return (
    <Modal isOpen={isOpen} size={'md'} toggle={toggleModal}>
      <ModalHeader className="popup-title" toggle={toggleModal}>
        Payment
      </ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="col-xs-12">
            <Payment />
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default PaymentPopup;
