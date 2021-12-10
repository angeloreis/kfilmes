/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Box, Image} from '@chakra-ui/react'
interface LogoSiteType {
  description: string
}

export function LogoBannerSite({
  description
}: LogoSiteType){
  return (
      <Image 
        boxSize="350px"
        alt={description}
        src="./img/logo-medio.png"
        objectFit='cover'
      />        
  )
}
