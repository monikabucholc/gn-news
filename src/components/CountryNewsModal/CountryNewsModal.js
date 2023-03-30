import React from 'react';
import '../../i18n/i18n'
//Components 
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//Style
import './CountryNewsModal.css'

const CountryNewsModal = ({showModal, setShowModal, article }) => {
    //Handle translation
    const { t } = useTranslation();
    
    return (
          <Modal 
            size="xl" 
            centered 
            show={showModal} 
            onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title className="gn-country-news-modal-title">{article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="gn-country-news-modal-author">{article.source.url ? `${t('author')}: ${article.source.url}` : null}</p>
                    <p className="gn-country-news-modal-content">{article.content ? article.content.substring(0, article.content.lastIndexOf('.') + 1).trim() : null}</p>
                    <a className="gn-country-news-modal-url" href={article.url}>{article.url ? `${t('source')}: ${article.url}` : null}</a>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(!showModal)}>
                    {t('close')}
                </Button>
                </Modal.Footer>
          </Modal>
    )
}

export default CountryNewsModal;