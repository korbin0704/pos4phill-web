import React, { useState } from 'react';
import NumberPopup from "./popup/number";

const Payment = () => {

  const [cash, setCash] = useState('600');
  const [cashCheck, setCashCheck] = useState(false);
  const [visa, setVisa] = useState('0');
  const [visaCheck, setVisaCheck] = useState(false);
  const [gCash, setGCash] = useState('0');
  const [gCashCheck, setGCashCheck] = useState(false);
  const [master, setMaster] = useState('500');
  const [masterCheck, setMasterCheck] = useState(false);
  const [jcb, setJcb] = useState('0');
  const [jcbCheck, setJcbCheck] = useState(false);
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

  const onCancel = () => {

  }

  return (
    <>
      <div className="payment">
        <h3>Pay Way</h3>
        <div className="item">
          <div className="btn btn-grey d-flex justify-content-between align-items-center form-control"
               onClick={() => setCashCheck(prev => !prev)}>
            <input type="checkbox" checked={cashCheck} readOnly />CASH
          </div>
          <div className="form-control" onClick={() => showNumberPopup(cash, setCash)}>
            {cash.currencyFormat()}
          </div>
        </div>
        <div className="item">
          <div className="btn btn-grey d-flex justify-content-between align-items-center form-control"
               onClick={() => setGCashCheck(prev => !prev)}>
            <input type="checkbox" checked={gCashCheck} readOnly />G-CASH
          </div>
          <div className="form-control" onClick={() => showNumberPopup(gCash, setGCash)}>
            {gCash.currencyFormat()}
          </div>
        </div>
        <div className="item">
          <div className="btn btn-grey d-flex justify-content-between align-items-center form-control"
               onClick={() => setVisaCheck(prev => !prev)}>
            <input type="checkbox" checked={visaCheck} readOnly />VISA
          </div>
          <div className="form-control" onClick={() => showNumberPopup(visa, setVisa)}>
            {visa.currencyFormat()}
          </div>
        </div>
        <div className="item">
          <div className="btn btn-grey d-flex justify-content-between align-items-center form-control"
               onClick={() => setMasterCheck(prev => !prev)}>
            <input type="checkbox" checked={masterCheck} readOnly />MASTER
          </div>
          <div className="form-control" onClick={() => showNumberPopup(master, setMaster)}>
            {master.currencyFormat()}
          </div>
        </div>
        <div className="item">
          <div className="btn btn-grey d-flex justify-content-between align-items-center form-control"
               onClick={() => setJcbCheck(prev => !prev)}>
            <input type="checkbox" checked={jcbCheck} readOnly />JCB
          </div>
          <div className="form-control" onClick={() => showNumberPopup(jcb, setJcb)}>
            {jcb.currencyFormat()}
          </div>
        </div>
        <h3 className="m-t-20">CARD Number:</h3>
        <div className="input-group">
          <div className="form-group">
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
        </div>
        <div className="input-group">
          <div className="form-group">
            <label className="control-label">Return</label>
            <div className="form-control" onClick={() => showNumberPopup(returnPrice, setReturnPrice)}>
              {returnPrice.currencyFormat()}
            </div>
          </div>
          <div className="form-group">
            <label className="control-label">Drawer Cash</label>
            <input type="number" className="form-control" value={drawerCash.currencyFormat()} readOnly />
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <div className="btn-group m-t-10">
          <button className="btn btn-white" onClick={onCancel}>CANCEL</button>
          <button className="btn btn-purple" onClick={onDone}>DONE/OPEN</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-success" onClick={onPrint}>PRINT</button>
          <button className="btn btn-danger" onClick={onInitialize}>Initialize</button>
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
    </>
  );
};

export default Payment;
