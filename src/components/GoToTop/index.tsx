import React from 'react'

import * as S from './styles'

const GotToTop: React.FC = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <S.WrapperDiv>
      <S.ClickButton onClick={scrollTop}>
        <S.ArrowUp></S.ArrowUp>
        <S.ArrowUp>top</S.ArrowUp>
      </S.ClickButton>
    </S.WrapperDiv>
  )
}

export default GotToTop
