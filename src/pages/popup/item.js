import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useEffect, useState } from "react";

const ItemPopup = ({ isOpen, info, onClose, onSave, onDelete }) => {

  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem(info);
  }, [info]);

  const toggleModal = result => {
    onClose?.(result);
  }

  const handleSave = () => {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    onSave?.(item);
  }

  const handleDelete = () => {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    onDelete?.(item);
  }

  const handleMinus = () => {
    if (item.qty < 2) {
      return;
    }

    setItem(prev => {
      return {
        ...prev,
        qty: prev.qty - 1
      };
    });
  }

  const handlePlus = () => {
    setItem(prev => {
      return {
        ...prev,
        qty: prev.qty + 1
      };
    });
  }

  const getExt = () => (item.price * (100 - item.discount) / 100);

  if (item == null) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} size={'md'} toggle={toggleModal}>
      <ModalHeader className="popup-title" toggle={toggleModal}>
        Item
      </ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="col-xs-12">
            <div className="d-flex item-info">
              <img src={item.image} className="item-thumb" />
              <div className="d-flex flex-column m-l-10">
                <h3 className="">{item.name}</h3>
                <h3 className="">
                  Price : ${getExt().currencyFormat()} (original)&nbsp;
                  <strike>${item.price.currencyFormat()}</strike>
                </h3>
                <div className="d-flex buttons">
                  <button className="btn btn-white btn-lg f-s-20" onClick={handleMinus}>-</button>
                  <div className="form-control d-flex align-items-center justify-content-center f-s-30">{item.qty}</div>
                  <button className="btn btn-white btn-lg f-s-20" onClick={handlePlus}>+</button>
                </div>
                <div className="d-flex align-items-center m-t-15">
                  <h5 className="control-label m-b-0">Amount</h5>
                  <input type="text" className="form-control m-l-10" readOnly
                         value={(getExt() * item.qty).currencyFormat()} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 m-t-15">
            <div className="btn-group width-full">
              <button className="btn btn-primary btn-lg" onClick={handleSave}>SAVE</button>
              <button className="btn btn-danger" onClick={handleDelete}>DEL</button>
              <button className="btn btn-white" onClick={toggleModal}>CLOSE</button>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ItemPopup;
