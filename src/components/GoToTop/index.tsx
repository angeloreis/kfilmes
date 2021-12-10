import React from 'react'
import { Flex, Button, Text } from '@chakra-ui/react'
import {RiArrowUpCircleFill} from 'react-icons/ri'

export const GotToTop: React.FC = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <Button size='sm' variant='solid' colorScheme='red' borderRadius='100' leftIcon={<RiArrowUpCircleFill />} onClick={scrollTop}>
        <Text fontSize='16px'>Para o Topo</Text>
      </Button>
    </>
  )
}