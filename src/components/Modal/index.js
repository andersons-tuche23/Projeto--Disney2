import React from 'react';
import { useRef, useEffect } from 'react';
import Styles from './index.module.scss'


const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }


  return (
    <div className={Styles.modalOverlay}>
      <div className={Styles.modal} ref={modalRef}>
        <div className={Styles.imagem_card}>
          <img src='/card.png' alt="Imagem_card" />
        </div>
        <div className={Styles.modalContent}>
          {children}
          <button className={Styles.closeButton} onClick={onClose}>
            x
          </button>
        </div>
      </div>
    </div>
    



  )
}

export default Modal;