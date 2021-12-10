import React from 'react'

import {
   Flex,
   Stack,
   Drawer,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   DrawerHeader,
   DrawerBody,
   useBreakpointValue  } from '@chakra-ui/react'
   
import { Menuitems } from './MenuItems';

import { useSidebarDrawer } from 'contexts/SidebarDrawerContext';

export function Menu() {
  const {isOpen, onClose} = useSidebarDrawer();
  const isDrawerSiderBar = useBreakpointValue({ base: true, lg: false })
 
  if (isDrawerSiderBar) {
    return (
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent bg='gray.800' p='4'>
                    <DrawerCloseButton mt='6'/>
                    <DrawerHeader>NAVEGAÇÃO</DrawerHeader>
                    <DrawerBody>
                    <Stack spacing='12' align='flex-start'>
                      <a href="#about-us">Quem Somos</a>
                      <a href="#operate-area">Área que Atuamos</a>
                      <a href="#our-costumers">Nossos Clientes</a>
                      <a href="#studio">Estúdio</a>
                      <a href="#contact">Contato</a>          
                    </Stack>  
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );    
  }

  return (
    <Flex
      as='header'
      maxWidth={1480}
      mx='auto'
      my='8'
      px='6'>
        <Menuitems />  
    </Flex>        
  )
}