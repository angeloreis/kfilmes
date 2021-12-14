import { Flex, Stack } from "@chakra-ui/react";
import { LogoBannerSite } from "components/Logo";
import { LogoBannerDream } from "components/LogoDream";
import { HasWideVersionProps } from "utils/typesUniversalComponents";

export function BannerLogo({isWideVersion}: HasWideVersionProps) {
    return (
        <Flex justify="center" align="center">
        <Stack direction={isWideVersion ? "row" : "column"} spacing="5px">
          <LogoBannerSite description="K Filmes" />
          <LogoBannerDream description="Você Sonha e a Gente Realiza" />
        </Stack>
      </Flex>
    );
}