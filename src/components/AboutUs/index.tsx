import React from 'react'
import * as S from './styles'

interface AboutUsProps {
  children: React.ReactNode
}

const AboutUs = ({ children }: AboutUsProps) => {
  return (
    <S.WrapperAboutUs>
      {children}
      <S.ContainerText>
        <S.AboutUsText>
          Quando você adiciona{' '}
          <strong>QUALIDADE, AGILIDADE E CRIATIVIDADE,</strong> com pessoas
          apaixonadas pelo que fazem, o resultado surpreende. <br />-
        </S.AboutUsText>
        <S.AboutUsText>
          Nosso diferencial é o <strong>AMOR</strong> ao qual colocamos em
          nossos diversos serviços. Vamos além de equipamentos modernos e de
          altíssima resolução, <strong>NOSSO FOCO</strong> é{' '}
          <strong>EMOCIONAR</strong>, arrepiar a pele e trazer lagrimas de
          emoção a quem assiste o que fazemos. <br />-
        </S.AboutUsText>
        <S.AboutUsText>
          Seja o nosso Motion graphics <strong>CRIATIVO</strong>, os nossos
          roteiros que tocam os sentimentos ou nossa edição{' '}
          <strong>DINÂMICA</strong>.
          <br />-
        </S.AboutUsText>
        <S.AboutUsText>
          Em cada take, seja ele na terra ou no ar, sempre buscamos e{' '}
          <strong>ALCANÇAMOS</strong>
          algo novo e <strong>ESPETACULAR</strong>. Estamos prontos para somar
          forças com vocês e atender seus clientes de forma{' '}
          <strong>INOVADORA</strong>, em todos os formatos disponíveis no{' '}
          <strong>MERCADO.</strong>
          <br />-
        </S.AboutUsText>
      </S.ContainerText>
    </S.WrapperAboutUs>
  )
}

export default AboutUs
