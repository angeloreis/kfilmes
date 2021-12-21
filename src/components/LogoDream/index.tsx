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
        alt={description}
        src="./img/makeDream.png"
        width={{sm: 100, md: 260, lg: 360}}
      />        
  )
}
