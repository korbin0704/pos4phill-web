import React from "react";
import { Card, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const CommonModal = React.memo((props) => {

  const {
    show = false,
    title = '',
    text = '',
    subText = '',
    okBtn = '',
    cancelBtn = '',
    onModalClose
  } = props;

  const onClose = res => {
    onModalClose?.(res || false);
  };

  return (
    <Modal isOpen={show} toggle={onClose}>
      <ModalHeader className='modal-header' toggle={onClose}>
        {title}
      </ModalHeader>
      <ModalBody className='text-center m-t-20'>
        {text.split('\n').map((line, i) => <h5 key={i}>{line}</h5>)}
        {
          subText !== '' &&
          <Card body outline className='card-outline-secondary bg-white text-secondary text-center m-b-10'>
            <blockquote className='card-blockquote mb-0'>
              <p className='f-s-14 f-w-600'>{subText}</p>
            </blockquote>
          </Card>
        }
      </ModalBody>
      <ModalFooter>
        {
          okBtn !== '' &&
          <button className="btn btn-primary" onClick={() => onClose(true)}>{okBtn}</button>
        }
        {
          cancelBtn !== '' &&
          <button className="btn btn-default" onClick={() => onClose(false)}>{cancelBtn}</button>
        }
      </ModalFooter>
    </Modal>
  );
});

export default CommonModal;
