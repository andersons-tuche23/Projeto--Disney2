import React from 'react';
import Styles from './index.module.scss';
import InputComponent from '@/components/Input';
import { useState } from 'react';
import Avatar from '@/components/Avatar';
import Modal from '@/components/Modal';


function personagens() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className={Styles.back_simba}>
            <div className={Styles.logo_frp}>
                <div>
                    <img src='/frp.logo.png' alt='imagem_frp_logo' />
                </div>
                <div className={Styles.input_simba}>
                    <InputComponent />
                </div>
            </div>

            <div className={Styles.modal_container}>
                <Avatar onClick={openModal} />
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}/>
                
        </div>


    )
}

export default personagens;