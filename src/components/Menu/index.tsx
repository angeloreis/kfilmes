import React from 'react'

import * as S from './styles'

const Menu = () => {
  return (
    <S.WrapperMenu>
      <S.MenuNavegacao>
        <S.MenuBase>
          <S.MenuItem>Home</S.MenuItem>
          <S.MenuItem>Quem Somos</S.MenuItem>
          <S.MenuItem>Área que Atuamos</S.MenuItem>
          <S.MenuItem>Nossos Clientes</S.MenuItem>
          <S.MenuItem>Estúdio</S.MenuItem>
          <S.MenuItem>Contato</S.MenuItem>
        </S.MenuBase>
      </S.MenuNavegacao>
    </S.WrapperMenu>
  )
}

export default Menu
