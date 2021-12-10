import { HStack, Link } from '@chakra-ui/react'
import { LinkOfMenu } from './LinkOfMenu';

export function Menuitems() {
    return (
        <HStack spacing='8'>
          <LinkOfMenu href="#about-us" description="Quem Somos" />
          <LinkOfMenu href="#operate-area" description="Área que Atuamos" />
          <LinkOfMenu href="#our-costumers" description="Nossos Clientes" />
          <LinkOfMenu href="#studio" description="Estúdio" />
          <LinkOfMenu href="#contact" description="Contato" />   
        </HStack>  
    );
}