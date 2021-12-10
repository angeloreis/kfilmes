import {
  Flex,
  Text,
  SimpleGrid,
  Stack,
  Divider,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

import { LogoBannerSite } from "../components/Logo";
import { LogoBannerDream } from "../components/LogoDream";
import { AboutUs } from "../components/AboutUs";
import { GotToTop } from "../components/GoToTop";
import { OperateArea } from "../components/OperateArea";

import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

import { CardImage } from "components/CardImage";

import { StudioText } from "components/StudioText";
import { SocialContactService } from "components/SocialContactFooter";
import { FormContact } from "components/FormContact";

import { useSidebarDrawer } from "contexts/SidebarDrawerContext";

export default function Home() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex direction="column" h="100vh">
      <title>K Filmes | Você sonha e a gente Realiza!</title>
      <Header>
        <Menu />
      </Header>

      <Flex justify="center">
        <SimpleGrid gap="4">
          <Stack direction={isWideVersion ? "row" : "column"} justify="center">
            <LogoBannerSite description="K Filmes" />
            <LogoBannerDream description="Você Sonha e a Gente Realiza" />
          </Stack>
        </SimpleGrid>
      </Flex>

      <Divider py="8" variant="none" />

      <Flex id="about-us" justify="center">
        <AboutUs />
      </Flex>

      <Divider py="8" variant="none" />

      <Flex
        id="operate-area"
        justify="center"
        bgImage="img/bg-operate-area.png"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <SimpleGrid minChildWidth="850px" spacing="25px" py="10">
          <Text as="h1" fontSize="40px" fontWeight="bold">
            Área que atuamos?
          </Text>
          <OperateArea />
        </SimpleGrid>
      </Flex>

      <Divider py="8" variant="none" />

      <Flex id="our-costumers" justify="center">
        <Stack>
          <Text as="h1" fontSize="40px" fontWeight="bold">
            Nossos clientes
          </Text>

          <SimpleGrid columns={[5, null, 5]} spacing="25px">
            <CardImage
              sourceImage="../img/costumers/gov_pa.png"
              titleCard="Governo do Estado do Pará"
            />

            <CardImage
              sourceImage="../img/costumers/tcm_pa.png"
              titleCard="Tribunal de Contas do Município do Estado do Pará"
            />

            <CardImage
              sourceImage="../img/costumers/shopping_bosque.png"
              titleCard="Shopping Bosque"
            />

            <CardImage
              sourceImage="../img/costumers/citropar.png"
              titleCard="Citropar"
            />

            <CardImage
              sourceImage="../img/costumers/cervejaria_dona.png"
              titleCard="Cervejaria Dona"
            />

            <CardImage
              sourceImage="../img/costumers/amazon_polpas.png"
              titleCard="Amazon Polpas"
            />
            <CardImage
              sourceImage="../img/costumers/shopping_metropole.png"
              titleCard="Shopping Metrópole"
            />
            <CardImage
              sourceImage="../img/costumers/finama.png"
              titleCard="Faculdade Finama"
            />
            <CardImage sourceImage="../img/costumers/csb.png" titleCard="CSB" />
            <CardImage
              sourceImage="../img/costumers/stetic_class.png"
              titleCard="Stetic Class"
            />
          </SimpleGrid>
        </Stack>
      </Flex>

      <Divider py="8" variant="none" />

      <Flex id="studio" justify="center">
        <Stack direction="column" justify="center">

          <Text as="h1" fontSize="40px" fontWeight="bold">
            Estúdio Completo
          </Text>
        <Stack direction="row">
          <SimpleGrid minChildWidth="350px" spacing="25px" py="10">
            <Image src='img/estudio_completo.png' alt='Estúdio completo'/>
          </SimpleGrid>
          <SimpleGrid minChildWidth="350px" spacing="25px" py="10">
            <StudioText />
          </SimpleGrid>
        </Stack>
        </Stack>
      </Flex>

      <Divider py="8" variant="none" />

      <Flex id="contact" justify="center">
        <Stack direction="column" justify="center">

          <Text as="h1" fontSize="40px" fontWeight="bold" px="120">
            CONTATO
          </Text>

          <Stack direction="row">
          <SimpleGrid minChildWidth="350px" spacing="25px" px="20" py='10'>
            <FormContact />
          </SimpleGrid>
          <SimpleGrid minChildWidth="350px" spacing="25px" py="10">
            <SocialContactService />          
          </SimpleGrid>
        </Stack>        
        </Stack>
      
      </Flex>

      <Flex align="flex-end" justify="flex-end">
        <GotToTop />
      </Flex>
    </Flex>
  );
}
