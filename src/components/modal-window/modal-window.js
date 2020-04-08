import React, { useState } from 'react';
import { Button, Modal,ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const ModalWindow = ({onDelete}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <butoon onClick={toggle}><i className="fa fa-trash-o"></i></butoon>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
        <ModalBody>Your post will be ultimately deleted.</ModalBody>
        <ModalFooter>
         <Button color="info" onClick={onDelete}>Delete</Button>{' '}
         <Button outline color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalWindow;