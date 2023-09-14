import React from 'react';
import Styles from './index.module.scss'



function Avatar({onClick}) {
  return (
    <div onClick={onClick} className={Styles.modal}>
      <img className={Styles.image} src='https://img.elo7.com.br/product/zoom/278977B/filhote-simba-arquivo-em-camada.jpg' width={100} height={100} />
    </div>


  )
}

export default Avatar;