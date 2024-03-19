import React, { useEffect, useRef, useState } from 'react';
import MyTable from "../components/MyTable";
import ItemPopup from "./popup/item";

const Main = () => {

  const [list, setList] = useState([]);
  useEffect(() => {
    setList([
      {
        id: 1,
        name: 'Engine Oil',
        qty: 1,
        price: 100,
        discount: 0,
        vat: 10,
        image: 'http://192.168.0.176:8040/html/img/placeholder-image-11.png'
      },
      {
        id: 2,
        name: 'Ramen',
        qty: 2,
        price: 200,
        discount: 0,
        vat: 40,
        image: 'http://192.168.0.176:8040/html/img/placeholder-image-11.png'
      },
      {
        id: 3,
        name: 'Milk',
        qty: 1,
        price: 100,
        discount: 0,
        vat: 10,
        image: 'http://192.168.0.176:8040/html/img/placeholder-image-11.png'
      },
      {
        id: 4,
        name: 'Kimchi',
        qty: 1,
        price: 1000,
        discount: 50,
        vat: 50,
        image: 'http://192.168.0.176:8040/html/img/placeholder-image-11.png'
      },
    ]);
  }, []);

  const [seniorNo, setSeniorNo] = useState('580101');
  const [seniorName, setSeniorName] = useState('Hong Gil Dong');
  const [wholeSale, setWholeSale] = useState('');

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

  const [itemPopup, setItemPopup] = useState({
    isOpen: false,
    info: null,
  });
  const showItemPopup = info => setItemPopup({
    isOpen: true,
    info
  });
  const hideItemPopup = () => setItemPopup({
    isOpen: false,
    info: null
  });

  const onCancel = () => {
    setList(prev => prev.concat({
      id: 4,
      name: 'Kimchi',
      qty: 1,
      price: 1000,
      discount: 50,
      vat: 50,
      image: 'http://192.168.0.176:8040/html/img/placeholder-image-11.png'
    }))
  }

  const onDone = () => {
    setList(prev => prev.filter((it, idx) => idx > 0));
  }

  const onInitialize = () => {

  }

  const mainRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const thirdRowRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      firstRowRef.current.style.height = `${mainRef.current.clientHeight - secondRowRef.current.clientHeight - thirdRowRef.current.clientHeight}px`;
    }
  }, []);

  return (
    <div className="main" ref={mainRef}>

      <div className="row" ref={firstRowRef}>
        <div className="col-xs-12 d-flex flex-column">
          <MyTable
            data={list}
            onCell={item => showItemPopup(item)}
          />
        </div>
      </div>

      <div className="row" ref={secondRowRef}>
        <div className="col-xs-7">
          <div className="panel panel-inverse">
            <div className="panel-heading">
              <h4 className="panel-title">Senior Discount</h4>
            </div>
            <div className="panel-body">
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
            <div className="panel-body">
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

      <div className="row" ref={thirdRowRef}>
        <div className="col-xs-12">
          <div className="panel panel-inverse">
            <div className="panel-heading">
              <h4 className="panel-title">Payment</h4>
            </div>
            <div className="panel-body">
              <div className="payment">
                <div className="left">
                  <div className="item">
                    <button className="btn btn-grey">CASH</button>
                    <div className="form-control">{cash.currencyFormat()}</div>
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">VISA</button>
                    <div className="form-control">{visa.currencyFormat()}</div>
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">G-CASH</button>
                    <div className="form-control">{gCash.currencyFormat()}</div>
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">MASTER</button>
                    <div className="form-control">{master.currencyFormat()}</div>
                  </div>
                  <div className="item">
                  </div>
                  <div className="item">
                    <button className="btn btn-grey">JCB</button>
                    <div className="form-control">{jcb.currencyFormat()}</div>
                  </div>
                  <div className="item">
                  </div>
                  <div className="item">
                    <div className="form-inline">
                      <label className="control-label">CARD Num: &nbsp;</label>
                      <input className="form-control" placeholder="" value={cardNum}
                             onChange={e => setCardNum(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="input-group">
                    <div className="form-group">
                      <label className="control-label">Input</label>
                      <input type="number" className="form-control" value={input}
                             onChange={e => setInput(e.target.value)} />
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
                  <div className="btn-group">
                    <button className="btn btn-white" onClick={onCancel}>CANCEL</button>
                    <button className="btn btn-purple" onClick={onDone}>DONE/OPEN</button>
                  </div>
                  <button className="btn btn-danger" onClick={onInitialize}>Initialize</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ItemPopup
        isOpen={itemPopup.isOpen}
        info={itemPopup.info}
        onClose={() => hideItemPopup()}
        onSave={item => {
          setList(prev => {
            return prev.map(it => {
              return it.id === item.id ? item : it;
            })
          })
          hideItemPopup();
        }}
        onDelete={item => {
          setList(prev => {
            return prev.filter(it => it.id !== item.id)
          })
          hideItemPopup();
        }}
      />
    </div>
  );
};

export default Main;
