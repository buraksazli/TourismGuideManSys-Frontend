import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';

function BiographyModalButton({biography}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Biography
        </Button>

        <Modal1 show={show} onHide={handleClose} dialogClassName='modal-dialog modal-dialog-scrollable' >
        <Modal1.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
            <Modal1.Title>Guide Biography </Modal1.Title>
        </Modal1.Header>
        <Modal1.Body style={{backgroundColor: "#DCDCDC"}}>
        {biography}       
        </Modal1.Body>
        <Modal1.Footer style={{backgroundColor: "#F0F0F0"}}>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
        </Modal1.Footer>
        </Modal1>
    </>
  )
}

export default BiographyModalButton