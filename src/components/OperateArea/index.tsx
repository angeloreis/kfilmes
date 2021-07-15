import React from 'react'

import * as S from './styles'

interface Props {
  children: React.ReactNode
}

const OperateArea: React.FC<Props> = ({ children }) => {
  return (
    <>
      <S.TitleOperate>{children}</S.TitleOperate>
      <S.ListMain>
        <S.ListItem>Motion Graphics</S.ListItem>
        <S.ListItem>Institucionais</S.ListItem>
        <S.ListItem>Documentários</S.ListItem>
        <S.ListItem>Campanhas políticas</S.ListItem>
        <S.ListItem>Eventos</S.ListItem>
        <S.ListItem>Lives</S.ListItem>
      </S.ListMain>
    </>
  )
}

export default OperateArea
