import React from 'react';
import Styles from '@/styles/Home.module.scss'
function InputComponent() {
  return (
    <div className={Styles.backInput}>
    <input placeholder='pesquisar'/> 
    <a href="personagens">pag personagens </a>
  </div>
  )
}

export default InputComponent;