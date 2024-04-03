import { Modal, ModalBody, ModalHeader } from "reactstrap";

const LoginPopup = ({ isOpen, onClose, callback }) => {

  const toggleModal = result => {
    onClose?.(result);
  }

  const onLogin = () => {
    callback?.();
  }

  return (
    <Modal isOpen={isOpen} size={'lg'} toggle={toggleModal}>
      <ModalHeader className="popup-title" toggle={toggleModal}>
        Log-In
      </ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="col-xl-12 p-t-20">
            <form action="/" method="POST">
              <fieldset>
                <div className="form-group row m-b-20">
                  <label className="col-md-3 col-form-label form-control-lg">ID</label>
                  <div className="col-md-7">
                    <input type="text" className="form-control form-control-lg" placeholder="Enter ID" />
                  </div>
                </div>
                <div className="form-group row m-b-20">
                  <label className="col-md-3 col-form-label form-control-lg">Password</label>
                  <div className="col-md-7">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" />
                  </div>
                </div>
                {/*<div className="form-group row m-b-15">
                  <div className="col-md-7 offset-md-3">
                    <div className="checkbox checkbox-css">
                      <input type="checkbox" id="fh_checkbox_css_1" />
                      <label htmlFor="fh_checkbox_css_1">Check me out</label>
                    </div>
                  </div>
                </div>*/}
                <div className="form-group row">
                  <div className="col-md-7 offset-md-3 d-flex">
                    <button type="reset" className="btn btn-lg btn-info flex-fill m-r-5">Reset</button>
                    <button type="button" className="btn btn-lg btn-primary flex-fill m-r-5" onClick={onLogin}>Login</button>
                    <button type="button" className="btn btn-lg btn-default flex-fill" onClick={toggleModal}>Close</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LoginPopup;
