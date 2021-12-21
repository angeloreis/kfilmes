import { Flex, Stack, Text } from "@chakra-ui/react";
import { OperateArea } from "components/OperateArea";

export function OperateAreaSection() {
    return (
        <Flex
        id="operate-area"
        justify="center"
        align="center"
        bgImage="img/bg-operate-area.png"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <Stack direction="column" align="center">
          <Text as="h1" fontSize="48px" fontWeight="bold" py='10' align="center">
            ÁREA QUE ATUAMOS
          </Text>          
          <Stack direction="column" align="left">
            <OperateArea />
          </Stack>
        </Stack>        
      </Flex>
    );
}