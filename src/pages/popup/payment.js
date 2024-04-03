import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React, { useState } from "react";
import NumberPopup from "./number";

const PaymentPopup = ({ isOpen, onClose }) => {

  const [cash, setCash] = useState('600');
  const [visa, setVisa] = useState('0');
  const [gCash, setGCash] = useState('0');
  const [master, setMaster] = useState('500');
  const [jcb, setJcb] = useState('0');
  const [cardNum, setCardNum] = useState('');

  const [input, setInput] = useState('');
  const [cashPrice, setCashPrice] = useState('');
  const [returnPrice, setReturnPrice] = useState('');
  const [drawerCash, setDrawerCash] = useState('');

  const [numberPopup, toggleNumberPopup] = useState({
    isOpen: false,
    data: '',
    setter: null
  });
  const showNumberPopup = (data, setter) => toggleNumberPopup({
    isOpen: true,
    data,
    setter
  });
  const hideNumberPopup = () => toggleNumberPopup({
    isOpen: false,
    data: '',
    setter: null
  });

  const toggleModal = result => {
    onClose?.(result);
  }

  const onCancel = () => {
    onClose?.();
  }

  const onPrint = () => {
    const result = window.confirm('Do you print bill?');
    if (result === false) {
      return;
    }

    // do sth
  }

  const onDone = () => {
  }

  const onInitialize = () => {

  }

  return (
    <Modal isOpen={isOpen} size={'md'} toggle={toggleModal}>
      <ModalHeader className="popup-title" toggle={toggleModal}>
        Payment
      </ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="col-xs-12">
            <div className="payment">
              <h3>Pay Way</h3>
              <div className="item">
                <button className="btn btn-grey">CASH</button>
                <div className="form-control" onClick={() => showNumberPopup(cash, setCash)}>
                  {cash.currencyFormat()}
                </div>
              </div>
              <div className="item">
                <button className="btn btn-grey">G-CASH</button>
                <div className="form-control" onClick={() => showNumberPopup(gCash, setGCash)}>
                  {gCash.currencyFormat()}
                </div>
              </div>
              <div className="item-row">
                <div className="item">
                  <button className="btn btn-grey">VISA</button>
                  <div className="form-control" onClick={() => showNumberPopup(visa, setVisa)}>
                    {visa.currencyFormat()}
                  </div>
                </div>
                <div className="item m-l-10">
                  <button className="btn btn-grey">MASTER</button>
                  <div className="form-control" onClick={() => showNumberPopup(master, setMaster)}>
                    {master.currencyFormat()}
                  </div>
                </div>
              </div>
              <div className="item-row">
                <div className="item">
                  <button className="btn btn-grey">JCB</button>
                  <div className="form-control" onClick={() => showNumberPopup(jcb, setJcb)}>
                    {jcb.currencyFormat()}
                  </div>
                </div>
                <div className="item" />
              </div>
              <div className="item">
                <div className="form-inline">
                  <label className="control-label">CARD Num: &nbsp;</label>
                  <input className="form-control" placeholder="" value={cardNum}
                         onChange={e => setCardNum(e.target.value)} />
                </div>
              </div>
              <h3 className="m-t-20">Settlement</h3>
              <div className="input-group">
                <div className="form-group">
                  <label className="control-label">Input</label>
                  <div className="form-control" onClick={() => showNumberPopup(input, setInput)}>
                    {input.currencyFormat()}
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Cash Prices</label>
                  <input type="number" className="form-control" value={cashPrice.currencyFormat()} readOnly />
                </div>
                <div className="form-group">
                  <label className="control-label">Return</label>
                  <input type="number" className="form-control" value={returnPrice.currencyFormat()} readOnly />
                </div>
                <div className="form-group">
                  <label className="control-label">Drawer Cash</label>
                  <input type="number" className="form-control" value={drawerCash.currencyFormat()} readOnly />
                </div>
              </div>
              <div className="btn-group m-t-10">
                <button className="btn btn-white" onClick={onCancel}>CANCEL</button>
                <button className="btn btn-success" onClick={onPrint}>PRINT</button>
                <button className="btn btn-purple" onClick={onDone}>DONE/OPEN</button>
              </div>
              <button className="btn btn-danger m-t-10" onClick={onInitialize}>Initialize</button>
            </div>
          </div>
        </div>
        <NumberPopup
          isOpen={numberPopup.isOpen}
          data={numberPopup.data}
          onClose={() => hideNumberPopup()}
          onApply={value => {
            numberPopup.setter?.(value);
            hideNumberPopup();
          }}
        />
      </ModalBody>
    </Modal>
  );
};

export default PaymentPopup;
