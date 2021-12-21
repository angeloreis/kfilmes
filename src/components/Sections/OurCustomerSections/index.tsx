import { Flex, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import { CardImage } from "components/CardImage";

export function OurCustomersSection() {
    return (
        <Flex id="our-costumers" justify="center">
        <Stack>
          <Text as="h1" fontSize="40px" fontWeight="bold">
            NOSSOS CLIENTES
          </Text>

          <SimpleGrid columns={{sm: 1, md: 1, lg:5}} spacing="10" align='center'>
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
    );
}