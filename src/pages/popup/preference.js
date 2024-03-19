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
                  <label className="col-md-3 col-form-label">POS_ID</label>
                  <div className="col-md-7">
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="form-group row m-b-15">
                  <label className="col-md-3 col-form-label">Server</label>
                  <div className="col-md-7">
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="form-group row m-b-15">
                  <label className="col-md-3 col-form-label">Log Home</label>
                  <div className="col-md-7">
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="form-group row m-b-15">
                  <label className="col-md-3 col-form-label">IP</label>
                  <div className="col-md-7">
                    <input type="text" className="form-control" value="192.168.0.1" readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-7 offset-md-3">
                    <button type="button" className="btn btn-sm btn-primary m-r-5" onClick={onReset}>RESET</button>
                    <button type="button" className="btn btn-sm btn-default" onClick={onConfirm}>CONFIRM</button>
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
