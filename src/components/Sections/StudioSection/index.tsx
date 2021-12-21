import { Flex, Stack, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { StudioText } from "components/StudioText";
import { HasWideVersionProps } from "utils/typesUniversalComponents";

export function StudioSection({isWideVersion}: HasWideVersionProps) {
    return (
        <Flex id="studio" justify="center">
        <Stack direction="column" justify="center">
          <Text as="h1" fontSize="40px" fontWeight="bold">
            ESTÚDIO COMPLETO
          </Text>
          <Stack direction={isWideVersion ? "row": "column"} align="center">
            <SimpleGrid minChildWidth="350px" spacing="25px" py="10" align="center">
              <Image src="img/estudio_completo.png" alt="Estúdio completo" width={320}/>
            </SimpleGrid>
            <SimpleGrid minChildWidth="250px" spacing="25px" py="10" align="center">
              <StudioText />
            </SimpleGrid>
          </Stack>
        </Stack>
      </Flex>
    );
}