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
                    <p className="gn-country-news-modal-content">
                        Największą trudność w zadaniu sprawiły mi testy, ponieważ dotychczas nie 
                        miałam z nimi doświadczenia, a dodatkowo napotkałam na trudności w konfiguracji pakietu RTL z Vite. 
                        Ostatecznie skorzystałam z CRA, by w celu rozwiązania zadania w rozsądnym czasie skupić się na nauce samych testów, a nie konfiguracji. 
                        Załączone testy działają.<br/><br/>
                        Tworzenie pozostałych funkcjonalności było dla mnie fajną zabawą.
                        Największą frajdę sprawił mi projekt UI aplikacji. Obecnie skupiam się na rozwoju programistycznym, 
                        ale projektowanie użytkowe i graficzne zawsze sprawia mi przyjemność.
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

