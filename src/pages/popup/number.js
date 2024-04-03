import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useEffect, useState } from "react";

const NumberPopup = ({ isOpen, data, onClose, onApply }) => {

  const [value, setValue] = useState('0');
  useEffect(() => {
    setValue(data);
  }, [data]);

  const toggleModal = result => onClose?.(result);

  const onClear = () => setValue('0');

  const onConfirm = () => onApply?.(value);

  const onNumberPad = (digit) => {
    if (isNaN(Number(`${value}${digit}`))) {
      return;
    }
    setValue(prev => {
      let newValue = `${prev}${digit}`;
      if (newValue.startsWith('0') && !newValue.startsWith('0.')) {
        newValue = newValue.substr(1);
      }
      return newValue;
    });
  }

  const onDelete = () => {
    if (value.length === 1) {
      setValue('0');
      return;
    }
    setValue(prev => prev.substr(0, prev.length - 1));
  }

  const onDot = () => {
    if (isNaN(Number(`${value}.`))) {
      return;
    }
    setValue(prev => `${prev}.`);
  }

  return (
    <Modal isOpen={isOpen} toggle={toggleModal} style={{ width: 400 }}>
      <ModalHeader className="popup-title" toggle={toggleModal}>
        Number
      </ModalHeader>
      <ModalBody>
        <div className="number-input">
          <div className="form-control form-control-lg number-display">{value.currencyFormat()}</div>
          <div className="number-pad">
            <div className="number-button" onClick={() => onNumberPad(7)}><label>7</label></div>
            <div className="number-button" onClick={() => onNumberPad(8)}><label>8</label></div>
            <div className="number-button" onClick={() => onNumberPad(9)}><label>9</label></div>
            <div className="number-button" onClick={() => onNumberPad(4)}><label>4</label></div>
            <div className="number-button" onClick={() => onNumberPad(5)}><label>5</label></div>
            <div className="number-button" onClick={() => onNumberPad(6)}><label>6</label></div>
            <div className="number-button" onClick={() => onNumberPad(1)}><label>1</label></div>
            <div className="number-button" onClick={() => onNumberPad(2)}><label>2</label></div>
            <div className="number-button" onClick={() => onNumberPad(3)}><label>3</label></div>
            <div className="number-button" onClick={onDelete}><label>DEL</label></div>
            <div className="number-button" onClick={() => onNumberPad(0)}><label>0</label></div>
            <div className="number-button" onClick={onDot}><label>.</label></div>
          </div>
          <div className="btn-group">
            <button className="btn btn-lg btn-default" onClick={onClear}>Clear</button>
            <button className="btn btn-lg btn-primary" onClick={onConfirm}>Apply</button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default NumberPopup;
