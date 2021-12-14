import { Flex, Stack, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { StudioText } from "components/StudioText";

export function StudioSection() {
    return (
        <Flex id="studio" justify="center">
        <Stack direction="column" justify="center">
          <Text as="h1" fontSize="40px" fontWeight="bold">
            ESTÚDIO COMPLETO
          </Text>
          <Stack direction="row">
            <SimpleGrid minChildWidth="350px" spacing="25px" py="10">
              <Image src="img/estudio_completo.png" alt="Estúdio completo" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="350px" spacing="25px" py="10">
              <StudioText />
            </SimpleGrid>
          </Stack>
        </Stack>
      </Flex>
    );
}