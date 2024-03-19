import React, { useState } from 'react';
import LoginPopup from "./popup/login";
import dayjs from "dayjs";
import classnames from "classnames";
import PreferencePopup from "./popup/preference";
import Main from "./Main";
import Delivery from "./Delivery";

const Home = () => {

  const [showLogin, toggleLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [delivery, setDelivery] = useState(0);
  const [preferencePopup, setPreferencePopup] = useState(false);

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
    setPreferencePopup(true);
  }

  return (
    <div className="home">
      <div className="row">
        <div className="col-xs-12 d-flex flex-column">
          <div className="table-header">
            <button className={classnames(["btn", delivery > 0 ? "btn-outline-primary" : "btn-primary"])}
                    onClick={onDelivery}>Delivery
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

      {delivery < 1 ? <Main /> : <Delivery />}

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
        onClose={() => setPreferencePopup(false)}
      />
    </div>
  );
};
export default Home;
