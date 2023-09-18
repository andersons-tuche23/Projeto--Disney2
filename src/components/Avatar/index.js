import React from 'react';
import Styles from './index.module.scss'



function Avatar({ onClick}) {




  return (
    <>
      <div className={Styles.cards}>
        <img onClick={onClick} src='https://img.elo7.com.br/product/zoom/278977B/filhote-simba-arquivo-em-camada.jpg' width={100} height={100} />
          <h1>simba</h1>
      </div>
      <div>
        <img src=''/>
      </div>
    </>
  )
}

export default Avatar;