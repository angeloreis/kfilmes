import { Flex, Stack, Text } from "@chakra-ui/react";
import { AboutUs } from "components/AboutUs";
import { HasWideVersionProps } from "utils/typesUniversalComponents";

export function AboutUsSection({isWideVersion}: HasWideVersionProps) {
    return (
        <Flex id="about-us" justify="center">
        <Stack direction="column" align="center">
          <Text as="h1" fontSize="48px" fontWeight="bold" py='10'>
            QUEM SOMOS?
          </Text>
          <Stack
            direction={isWideVersion ? "row" : "column"}
            align="center"
            spacing="30px"
          >
            <AboutUs />
          </Stack>
        </Stack>
      </Flex>
    );
}