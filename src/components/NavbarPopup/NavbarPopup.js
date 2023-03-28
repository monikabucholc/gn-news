import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const NavbarPopup = ({ showPop, setShowPop }) => {

    return (
          <Modal 
            className="gn-country-news-modal" 
            size="xl" 
            centered 
            show={showPop} 
            onHide={() => setShowPop(!showPop)}>
                <Modal.Header closeButton>
                    <Modal.Title className="gn-country-news-modal-title">Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="gn-country-news-modal-content">Feedback</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowPop(!showPop)}>
                    Close
                </Button>
                </Modal.Footer>
          </Modal>
    )
}

export default NavbarPopup;

