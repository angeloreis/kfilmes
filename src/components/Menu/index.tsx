/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

const Menu = () => {
  return (
    <nav className={styles.MenuNavigation}>
      <div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about-us">Quem Somos</a></li>
            <li><a href="#operate-area">Área que Atuamos</a></li>
            <li><a href="#our-costumers">Nossos Clientes</a></li>
            <li><a href="#studio">Estúdio</a></li>
            <li><a  href="#contact">Contato</a></li>          
        </ul>
      </div>
    </nav>
  )
}

export default Menu
