/* eslint-disable @next/next/no-img-element */
import React from 'react'
import HeaderTitleSection from '../HeaderSection'

import styles from './styles.module.scss'

export const AboutUs = () => {
  return (
    <div className={styles.WrapperAboutUsMain}>
      <div className={styles.ContainerText}>
        <HeaderTitleSection
          descriptionFirstline="Quem"
          descriptionSecondLine="somos?"
        />
        <p>
          Quando você adiciona{' '}
          <strong>QUALIDADE, AGILIDADE E CRIATIVIDADE,</strong> com pessoas
          apaixonadas pelo que fazem, o resultado surpreende. <br />-
        </p>
        <p>
          Nosso diferencial é o <strong>AMOR</strong> ao qual colocamos em
          nossos diversos serviços. Vamos além de equipamentos modernos e de
          altíssima resolução, <strong>NOSSO FOCO</strong> é{' '}
          <strong>EMOCIONAR</strong>, arrepiar a pele e trazer lagrimas de
          emoção a quem assiste o que fazemos. <br />-
        </p>
        <p>
          Seja o nosso Motion graphics <strong>CRIATIVO</strong>, os nossos
          roteiros que tocam os sentimentos ou nossa edição{' '}
          <strong>DINÂMICA</strong>.
          <br />-
        </p>
        <p>
          Em cada take, seja ele na terra ou no ar, sempre buscamos e{' '}
          <strong>ALCANÇAMOS </strong>
          algo novo e <strong>ESPETACULAR</strong>. Estamos prontos para somar
          forças com vocês e atender seus clientes de forma{' '}
          <strong>INOVADORA</strong>, em todos os formatos disponíveis no{' '}
          <strong>MERCADO.</strong>
          <br />-
        </p>
        <div className={styles.AboutUsSignatureText}>
          <p>
            Nos somos a <strong>K FILMES!</strong>
            <p>Somos a sua mais nova opção</p>
          </p>
        </div>
      </div>
      <div className={styles.AboutUsRightImg}>
        <img src='img/about-us-kfilmes-right.png' min-height="75%" alt=""/>
      </div>
    </div>
  )
}