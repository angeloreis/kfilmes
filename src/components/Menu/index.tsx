import React from 'react'
import Link from 'next/link'

import * as S from './styles'

const Menu = () => {
  return (
    <S.WrapperMenu>
      <S.MenuNavegacao>
        <S.MenuBase>
          <Link href="/">
            <S.MenuItem>Home</S.MenuItem>
          </Link>
          <Link href="#about-us">
            <S.MenuItem>Quem Somos</S.MenuItem>
          </Link>
          <Link href="#operate-area">
            <S.MenuItem>Área que Atuamos</S.MenuItem>
          </Link>
          <Link href="#our-costumers">
            <S.MenuItem>Nossos Clientes</S.MenuItem>
          </Link>
          <Link href="#studio">
            <S.MenuItem>Estúdio</S.MenuItem>
          </Link>
          <Link href="#contact">
            <S.MenuItem>Contato</S.MenuItem>
          </Link>
        </S.MenuBase>
      </S.MenuNavegacao>
    </S.WrapperMenu>
  )
}

export default Menu
