/* eslint-disable @next/next/no-img-element */
import ContainerSection from 'components/ContainerSection'
import React from 'react'
import { Col, Row, Image, Container } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <>  
        <Row className="container bg-dark">
          <Col xxl xl lg md>
            <div className="text-white">
              <p className="h2 text-uppercase fw-bolder">Quem Somos?</p>
              <p>
                Quando você adiciona{' '}
                <strong>QUALIDADE, AGILIDADE E CRIATIVIDADE,</strong> com pessoas
                apaixonadas pelo que fazem, o resultado surpreende.
              </p>
              <p>
                Nosso diferencial é o <strong>AMOR</strong> ao qual colocamos em
                nossos diversos serviços. Vamos além de equipamentos modernos e de
                altíssima resolução, <strong>NOSSO FOCO</strong> é{' '}
                <strong>EMOCIONAR</strong>, arrepiar a pele e trazer lagrimas de
                emoção a quem assiste o que fazemos.
              </p>
              <p>
                Seja o nosso Motion graphics <strong>CRIATIVO</strong>, os nossos
                roteiros que tocam os sentimentos ou nossa edição{' '}
                <strong>DINÂMICA</strong>.          
              </p>
              <p>
                Em cada take, seja ele na terra ou no ar, sempre buscamos e{' '}
                <strong>ALCANÇAMOS </strong>
                algo novo e <strong>ESPETACULAR</strong>. Estamos prontos para somar
                forças com vocês e atender seus clientes de forma{' '}
                <strong>INOVADORA</strong>, em todos os formatos disponíveis no{' '}
                <strong>MERCADO.</strong>
              </p>
              <p>
                Nos somos a <strong>K FILMES!</strong>
                <p>Somos a sua mais nova opção</p>
              </p>
            </div>
          </Col>
          <Col xxl xl lg md>
            <Image
              src='img/about-us-kfilmes-right.png'
              alt="K Filmes Digital - Quem Somos"
              height="450px"
              className="float-end"
              />
          </Col>
        </Row>      
    </>    
  )
}

export default AboutUs