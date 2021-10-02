import React from 'react'
import styles from './styles.module.scss';

const OperateArea: React.FC = () => {
  return (
    <>
      <p className="h2 text-uppercase fw-bolder">Quem Somos?</p>
      <ul className={styles.ListMain}>
        <li>Motion Graphics</li>
        <li>Institucionais</li>
        <li>Documentários</li>
        <li>Campanhas políticas</li>
        <li>Eventos</li>
        <li>Lives</li>
      </ul>    
    </>    
  )
}

export default OperateArea
