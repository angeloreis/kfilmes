import { Flex, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import { FormContact } from "components/FormContact";
import { SocialContactService } from "components/SocialContactFooter";

export function ContactSection() {
    return (
        <Flex id="contact" justify="center">
        <Stack direction="column" justify="center">
          <Text as="h1" fontSize="40px" fontWeight="bold" px="120">
            CONTATO
          </Text>

          <Stack direction="row">
            <SimpleGrid minChildWidth="350px" spacing="25px" px="20" py="10">
              <FormContact />
            </SimpleGrid>
            <SimpleGrid minChildWidth="350px" spacing="25px" py="10">
              <SocialContactService />
            </SimpleGrid>
          </Stack>
        </Stack>
      </Flex>
    );
}