import React from 'react'
import * as S from './styles'

interface HeaderProps {
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return <S.layoutHeader>{children}</S.layoutHeader>
}

export default Header
