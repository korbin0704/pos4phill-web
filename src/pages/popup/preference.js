import { Modal, ModalBody, ModalHeader } from "reactstrap";

const PreferencePopup = ({ isOpen, onClose }) => {

  const toggleModal = result => {
    onClose?.(result);
  }

  const onReset = () => {
  }

  const onConfirm = () => {

  }

  return (
    <Modal isOpen={isOpen} size={'md'} toggle={toggleModal}>
      <ModalHeader className="popup-title" toggle={toggleModal}>
        Preferences
      </ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="col-xl-12">
            <form action="/" method="POST">
              <fieldset>
                <div className="form-group row m-b-15">
                  <label className="col-md-3 col-form-label form-control-lg">POS_ID</label>
                  <div className="col-md-7">
                    <input type="text" className="form-control form-control-lg" placeholder="" />
                  </div>
                </div>
                <div className="form-group row m-b-15">
                  <label className="col-md-3 col-form-label form-control-lg">Server</label>
                  <div className="col-md-7">
                    <input type="text" className="form-control form-control-lg" placeholder="" />
                  </div>
                </div>
                <div className="form-group row m-b-15">
                  <label className="col-md-3 col-form-label form-control-lg">Log Home</label>
                  <div className="col-md-7">
                    <input type="text" className="form-control form-control-lg" placeholder="" />
                  </div>
                </div>
                <div className="form-group row m-b-25">
                  <label className="col-md-3 col-form-label form-control-lg">IP</label>
                  <div className="col-md-7">
                    <input type="text" className="form-control form-control-lg" value="192.168.0.1" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-7 offset-md-3 d-flex">
                    <button type="reset" className="btn btn-lg btn-primary flex-fill m-r-5">RESET</button>
                    <button type="button" className="btn btn-lg btn-default flex-fill" onClick={onConfirm}>CONFIRM</button>
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

export default PreferencePopup;
