import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React, { useState } from "react";
import Select from "react-select";

const WholeSalePopup = ({ isOpen, onClose }) => {

  const [wholeSale, setWholeSale] = useState(null);
  const [data, setData] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]);

  const toggleModal = result => {
    onClose?.(result);
  }

  return (
    <Modal isOpen={isOpen} size={'md'} toggle={toggleModal} style={{ width: 500 }}>
      <ModalHeader className="popup-title" toggle={toggleModal}>
        Whole Sale
      </ModalHeader>
      <ModalBody>
        <div className="d-flex flex-column">
          <div className="form-inline">
            <label className="control-label form-control-lg">Whole Sale:&nbsp;&nbsp;</label>
            <Select options={data} className="flex-fill" classNamePrefix={"my-pick"} value={wholeSale} onChange={e => setWholeSale(e)} />
          </div>
          <button className="btn btn-success btn-lg m-t-25">Apply</button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default WholeSalePopup;
