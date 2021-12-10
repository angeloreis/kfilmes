import { Flex, Text } from "@chakra-ui/react";

export function StudioText() {
  return (
    <Flex bg="white" borderRadius="5" width="500px" p='12'>
      <Text fontSize='2xl'color="black" align='justify'>
        Temos um <span>estúdio completo</span> com câmeras em 4k, Teleprompter,
        iluminação e captação de aúdio profissionais para as suas mais diversas
        necessidades
      </Text>
    </Flex>
  );
};
