/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export function AboutUs() {
  return (
    <>
      <Box w="350px" spacing="4" px="8">
        <Text align="justify">
          Quando você adiciona{" "}
          <strong>QUALIDADE, AGILIDADE E CRIATIVIDADE,</strong> com pessoas
          apaixonadas pelo que fazem, o resultado surpreende.
        </Text>
        <Text align="justify">
          Nosso diferencial é o <strong>AMOR</strong> ao qual colocamos em
          nossos diversos serviços. Vamos além de equipamentos modernos e de
          altíssima resolução, <strong>NOSSO FOCO</strong> é{" "}
          <strong>EMOCIONAR</strong>, arrepiar a pele e trazer lagrimas de
          emoção a quem assiste o que fazemos.
        </Text>
        <Text align="justify">
          Seja o nosso Motion graphics <strong>CRIATIVO</strong>, os nossos
          roteiros que tocam os sentimentos ou nossa edição{" "}
          <strong>DINÂMICA</strong>.
        </Text>
        <Text align="justify">
          Em cada take, seja ele na terra ou no ar, sempre buscamos e{" "}
          <strong>ALCANÇAMOS </strong>
          algo novo e <strong>ESPETACULAR</strong>. Estamos prontos para somar
          forças com vocês e atender seus clientes de forma{" "}
          <strong>INOVADORA</strong>, em todos os formatos disponíveis no{" "}
          <strong>MERCADO.</strong>
        </Text>
        <br />
        <Text align="justify">
          Nos somos a <strong>K FILMES!</strong>
          <Text>Somos a sua mais nova opção</Text>
        </Text>
      </Box>
      <Box spacing="4" px="8">
        <Image
          src="img/about-us-kfilmes-right.png"
          alt="K Filmes Digital - Quem Somos"
          height="660px"
        />
      </Box>
    </>
  );
}
