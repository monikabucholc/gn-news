import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';


const NavbarPopup = ({ showPop, setShowPop }) => {
    const { t } = useTranslation();

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
                    <p className="gn-country-news-modal-content">
                        {t('feedbackHard')}
                        <br/><br/>
                        {t('feedbackEasy')}
                    </p>
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

