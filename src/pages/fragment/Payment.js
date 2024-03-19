import React, { useState } from 'react';

const PaymentFragment = () => {

  const [seniorNo, setSeniorNo] = useState('580101');
  const [seniorName, setSeniorName] = useState('Hong Gil Dong');
  const [wholeSale, setWholeSale] = useState('');

  const [outCash, setOutCash] = useState('670');
  const [outVisa, setOutVisa] = useState('0');
  const [outGCash, setOutGCash] = useState('0');
  const [outMaster, setOutMaster] = useState('0');
  const [outJcb, setOutJcb] = useState('0');
  const [outCardNum, setOutCardNum] = useState('');
  const [outInput, setOutInput] = useState('338');
  const [outCashPrice, setOutCashPrice] = useState('672');
  const [outReturnPrice, setOutReturnPrice] = useState('0');
  const [outDrawerCash, setOutDrawerCash] = useState('23000');
  const [outRider, setOutRider] = useState('');
  const [outManager, setOutManager] = useState('');

  const [exception, setException] = useState('Delivery man does not return');
  const [inCash, setInCash] = useState('670');
  const [inVisa, setInVisa] = useState('0');
  const [inGCash, setInGCash] = useState('0');
  const [inMaster, setInMaster] = useState('500');
  const [inJcb, setInJcb] = useState('0');
  const [inCardNum, setInCardNum] = useState('');
  const [inInput, setInInput] = useState('1000');
  const [inCashPrice, setInCashPrice] = useState('672');
  const [inReturnPrice, setInReturnPrice] = useState('');
  const [inDrawerCash, setInDrawerCash] = useState('24000');
  const [inRider, setInRider] = useState('');
  const [inManager, setInManager] = useState('');

  const onOutCancel = () => {

  }

  const onOutDone = () => {

  }

  const onOutInitialize = () => {

  }
  const onInCancel = () => {

  }

  const onInDone = () => {

  }

  const onInInitialize = () => {

  }

  return (
    <div className="">
      <div className="row">
        <div className="col-xs-7">
          <div className="panel panel-inverse">
            <div className="panel-heading">
              <h4 className="panel-title">Senior Discount</h4>
            </div>
            <div className="panel-body border border-inverse">
              <div className="form-inline">
                <div className="form-inline mr-md-2">
                  <label className="control-label">Senior No:&nbsp;&nbsp;</label>
                  <input type="number" className="form-control" value={seniorNo}
                         onChange={e => setSeniorNo(e.target.value)} />
                </div>
                <div className="form-inline mt-sm-1 mt-md-0">
                  <label className="control-label">Senior Name:&nbsp;&nbsp;</label>
                  <input type="text" className="form-control" value={seniorName}
                         onChange={e => setSeniorName(e.target.value)} />
                  <button className="btn btn-success m-l-10">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-5">
          <div className="panel panel-inverse">
            <div className="panel-heading">
              <h4 className="panel-title">Retailer</h4>
            </div>
            <div className="panel-body border border-inverse">
              <div className="form-inline">
                <label className="control-label">Whole Sale:&nbsp;&nbsp;</label>
                <select className="form-control mr-md-2" value={wholeSale} onChange={e => setWholeSale(e.target.value)}>
                  <option value="">Select whole Sale</option>
                </select>
                <button className="btn btn-success mt-sm-2 mt-md-0">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12">
          <div className="panel panel-inverse">
            <div className="panel-heading">
              <h4 className="panel-title">Payment - OutBound</h4>
            </div>
            <div className="panel-body border border-inverse">
              <div className="payment">
                <div className="left">
                  <div className="item">
                    <button className="btn btn-grey">CASH</button>
                    <div className="form-control">{outCash.currencyFormat()}</div>
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">VISA</button>
                    <div className="form-control">{outVisa.currencyFormat()}</div>
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">G-CASH</button>
                    <div className="form-control">{outGCash.currencyFormat()}</div>
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">MASTER</button>
                    <div className="form-control">{outMaster.currencyFormat()}</div>
                  </div>
                  <div className="item">
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">JCB</button>
                    <div className="form-control">{outJcb.currencyFormat()}</div>
                  </div>
                  <div className="item">
                  </div>
                  <div className="item">
                    <div className="form-inline">
                      <label className="control-label">CARD Num: &nbsp;</label>
                      <input className="form-control" placeholder="" value={outCardNum}
                             onChange={e => setOutCardNum(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="input-group">
                    <div className="form-group">
                      <label className="control-label">Output</label>
                      <input type="number" className="form-control" value={outInput}
                             onChange={e => setOutInput(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Cash Prices</label>
                      <input type="number" className="form-control" value={outCashPrice.currencyFormat()} readOnly />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Return</label>
                      <input type="number" className="form-control" value={outReturnPrice.currencyFormat()} readOnly />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Drawer Cash</label>
                      <input type="number" className="form-control" value={outManager.currencyFormat()} readOnly />
                    </div>
                  </div>
                  <div className="btn-group">
                    <button className="btn btn-white" onClick={onOutCancel}>CANCEL</button>
                    <button className="btn btn-purple" onClick={onOutDone}>DONE/OPEN</button>
                  </div>
                  <button className="btn btn-danger" onClick={onOutInitialize}>Initialize</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-inline m-b-15 justify-content-end">
        <label className="control-label">Rider :&nbsp;</label>
        <select className="form-control" value={outRider} onChange={e => setOutRider(e.target.value)}>
          <option value="">Honggildong</option>
        </select>
        <label className="control-label m-l-5">Manager :&nbsp;</label>
        <select className="form-control" value={outManager} onChange={e => setOutManager(e.target.value)}>
          <option value="">Honggildong</option>
        </select>
        <button className="btn btn-success m-l-15">Start-Print</button>
        <button className="btn btn-indigo m-l-5">START</button>
      </div>

      <div className="row">
        <div className="col-xs-12">
          <div className="panel panel-inverse">
            <div className="panel-heading">
              <h4 className="panel-title">Payment - InBound</h4>
            </div>
            <div className="panel-body border border-inverse">
              <div className="payment">
                <div className="left">
                  <div className="item">
                    <button className="btn btn-grey">CASH</button>
                    <div className="form-control">{inCash.currencyFormat()}</div>
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">VISA</button>
                    <div className="form-control">{inVisa.currencyFormat()}</div>
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">G-CASH</button>
                    <div className="form-control">{inGCash.currencyFormat()}</div>
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">MASTER</button>
                    <div className="form-control">{inMaster.currencyFormat()}</div>
                  </div>
                  <div className="item">
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">JCB</button>
                    <div className="form-control">{inJcb.currencyFormat()}</div>
                  </div>
                  <div className="item">
                  </div>
                  <div className="item">
                    <div className="form-inline">
                      <label className="control-label">CARD Num: &nbsp;</label>
                      <input className="form-control" placeholder="" value={inCardNum}
                             onChange={e => setInCardNum(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="input-group">
                    <div className="form-group">
                      <label className="control-label">Input</label>
                      <input type="number" className="form-control" value={inInput}
                             onChange={e => setInInput(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Cash Prices</label>
                      <input type="number" className="form-control" value={inCashPrice.currencyFormat()} readOnly />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Return</label>
                      <input type="number" className="form-control" value={inReturnPrice.currencyFormat()} readOnly />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Drawer Cash</label>
                      <input type="number" className="form-control" value={inManager.currencyFormat()} readOnly />
                    </div>
                  </div>
                  <div className="btn-group">
                    <button className="btn btn-white" onClick={onInCancel}>CANCEL</button>
                    <button className="btn btn-purple" onClick={onInDone}>DONE/OPEN</button>
                  </div>
                  <button className="btn btn-danger" onClick={onInInitialize}>Initialize</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-inline m-b-15 justify-content-end align-items-start">
        <label className="control-label m-t-10">Exception :&nbsp;</label>
        <textarea className="form-control width-200" rows={3} value={exception} onChange={e => e.target.value} />
        <div className="form-inline m-b-15 justify-content-end mt-xs-2 mt-md-0">
          <label className="control-label m-l-5">Rider :&nbsp;</label>
          <select className="form-control" value={inRider} onChange={e => setInRider(e.target.value)}>
            <option value="">Honggildong</option>
          </select>
          <label className="control-label m-l-5">Manager :&nbsp;</label>
          <select className="form-control" value={inManager} onChange={e => setInManager(e.target.value)}>
            <option value="">Honggildong</option>
          </select>
          <button className="btn btn-success m-l-15">Arrival-Print</button>
          <button className="btn btn-indigo m-l-5">FINISH</button>
        </div>
      </div>

    </div>
  );

};

export default PaymentFragment;
