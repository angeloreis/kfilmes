import { Flex, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import { FormContact } from "components/FormContact";
import { SocialContactService } from "components/SocialContactFooter";
import { HasWideVersionProps } from "utils/typesUniversalComponents";

export function ContactSection({isWideVersion}: HasWideVersionProps) {
    return (
        <Flex id="contact" justify="center">
        <Stack direction="column" justify="center">
          <Text as="h1" fontSize="40px" fontWeight="bold" px="120">
            CONTATO
          </Text>

          <Stack direction={isWideVersion ? "column": "row"} align="center">
            <SimpleGrid  columns={{sm: 1, md: 2}} spacing="15" px="20" py="10">
              <FormContact />
              <SocialContactService />
            </SimpleGrid>
          </Stack>
        </Stack>
      </Flex>
    );
}