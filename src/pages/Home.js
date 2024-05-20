import React, { useState } from 'react';
import LoginPopup from "./popup/login";
import dayjs from "dayjs";
import classnames from "classnames";
import PreferencePopup from "./popup/preference";
import Main from "./Main";
import Delivery from "./Delivery";
import SeniorDiscountPopup from "./popup/senior";
import WholeSalePopup from "./popup/whole";
import Payment from "./Payment";

const Home = () => {

  const [list, setList] = useState([
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

  // 로그인여부
  const [isLogin, setIsLogin] = useState(false);

  // 송달정보패널 현시여부
  const [delivery, setDelivery] = useState(0);

  // 로그인팝업 현시여부
  const [showLogin, toggleLogin] = useState(false);

  // Preference 팝업현시여부
  const [preferencePopup, togglePreferencePopup] = useState(false);

  // 결제팝업현시여부
  const [paymentPopup, togglePaymentPopup] = useState(false);

  // senior 팝업현시여부
  const [seniorPopup, toggleSeniorPopup] = useState(false);

  // whole sale 팝업현시여부
  const [wholePopup, toggleWholePopup] = useState(false)

  const onLogin = () => {
    if (isLogin) {
      if (!window.confirm('Log out?')) {
        return;
      }
      setIsLogin(false);
    } else {
      toggleLogin(true);
    }
  }

  const onDelivery = () => {
    setDelivery(prev => 1 - prev);
  }

  const onPreferences = () => {
    togglePreferencePopup(true);
  }

  const onPayment = () => {
    togglePaymentPopup(true);
  }

  const onSeniorDiscount = () => {
    toggleSeniorPopup(true);
  }

  const onWholeSale = () => {
    toggleWholePopup(true);
  }

  return (
    <div className="home">
      <div className="row">
        <div className="col-xs-12 d-flex flex-column">
          <div className="table-header">
            {/*<button className="btn btn-blue" onClick={onPayment}>Payment</button>*/}
            <button className="btn btn-blue" onClick={onSeniorDiscount}>Senior Discount</button>
            <button className="btn btn-blue m-l-10" onClick={onWholeSale}>Whole Sale</button>
            <button className={classnames(["btn m-l-10", delivery > 0 ? "btn-outline-primary" : "btn-primary"])}
                    onClick={onDelivery}>
              Delivery
            </button>
            <button className="btn btn-success m-l-10" onClick={onPreferences}>Preferences</button>
            <div className="d-flex align-items-end pull-right">
              {
                isLogin ? <small className="m-r-10">Login: {dayjs().format('YYYY-MM-DD HH:mm:ss')}</small> : null
              }
              <button className="btn btn-info" onClick={onLogin}>{isLogin ? 'LOGOUT' : 'LOGIN'}</button>
            </div>
          </div>
        </div>
      </div>

      {
        delivery < 1 ?
          <div className="row" style={{ flex: 1, height: '100%', overflow: 'hidden' }}>
            <div className="col-xs-6" style={{height: '100%'}}>
              <Main
                list={list}
                onSave={item => {
                  setList(prev => {
                    return prev.map(it => {
                      return it.id === item.id ? item : it;
                    })
                  });
                }}
                onDelete={item => {
                  setList(prev => {
                    return prev.filter(it => it.id !== item.id)
                  });
                }}
              />
            </div>
            <div className="col-xs-6" style={{height: '100%', overflowY: 'auto'}}>
              <Payment />
            </div>
          </div>
          :
          <Delivery list={list} />
      }

      <LoginPopup
        isOpen={showLogin}
        onClose={() => toggleLogin(false)}
        callback={() => {
          setIsLogin(true);
          toggleLogin(false);
        }}
      />

      <PreferencePopup
        isOpen={preferencePopup}
        onClose={() => togglePreferencePopup(false)}
      />

      {/*<PaymentPopup
        isOpen={paymentPopup}
        onClose={() => togglePaymentPopup(false)}
      />*/}

      <SeniorDiscountPopup
        isOpen={seniorPopup}
        onClose={() => toggleSeniorPopup(false)}
      />

      <WholeSalePopup
        isOpen={wholePopup}
        onClose={() => toggleWholePopup(false)}
      />
    </div>
  );
};
export default Home;
