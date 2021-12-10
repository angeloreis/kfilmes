import React from 'react'
import { useSidebarDrawer } from 'contexts/SidebarDrawerContext';
import { IconButton, Icon, useBreakpointValue, Flex } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
interface HeaderProps {
  children: React.ReactNode
}

export function Header({ children }: HeaderProps) {

  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({base: false, lg: true})

  return (
    <Flex
      as='header'
      w='100%'
      h='20'
      maxWidth={1480}
      mx='auto'
      mt='4'
      px='6'
      align={isWideVersion ? 'left' : 'center'}      
    >

    { !isWideVersion && (
          <IconButton
            aria-label='Open
            Navigation'
            icon={<Icon as={RiMenuLine}/>}
            fontSize='24'
            variant='unstyled'
            onClick={onOpen}
            mr='2'>
              KFilmes
          </IconButton>
      )}

       { children }
    </Flex>
  );
}