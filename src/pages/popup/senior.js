import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React, { useState } from "react";

const SeniorDiscountPopup = ({ isOpen, onClose }) => {

  const [seniorNo, setSeniorNo] = useState('580101');
  const [seniorName, setSeniorName] = useState('Hong Gil Dong');

  const toggleModal = result => {
    onClose?.(result);
  }

  return (
    <Modal isOpen={isOpen} toggle={toggleModal} style={{ width: 500 }}>
      <ModalHeader className="popup-title" toggle={toggleModal}>
        Senior Discount
      </ModalHeader>
      <ModalBody>
        <div className="d-flex flex-column">
          <div className="form-inline">
            <label className="control-label form-control-lg width-150 justify-content-end">Senior No:</label>
            <input type="text" className="form-control form-control-lg" value={seniorNo}
                   onChange={e => setSeniorNo(e.target.value)} />
          </div>
          <div className="form-inline m-t-15">
            <label className="control-label form-control-lg width-150 text-nowrap justify-content-end">Senior Name:</label>
            <input type="text" className="form-control form-control-lg" value={seniorName}
                   onChange={e => setSeniorName(e.target.value)} />
          </div>
          <button className="btn btn-success btn-lg m-t-25">Apply</button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default SeniorDiscountPopup;
