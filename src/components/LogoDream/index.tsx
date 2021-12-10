/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Image } from '@chakra-ui/react'
interface LogoDreamType {
  description: string
}

export function LogoBannerDream({
  description
}: LogoDreamType){
  return (
      <Image 
        boxSize="350px"
        alt={description}
        src="./img/makeDream.png"
        objectFit='cover'
      />        
  )
}
