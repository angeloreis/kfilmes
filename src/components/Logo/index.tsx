/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Image} from '@chakra-ui/react'
interface LogoSiteType {
  description: string
}

export function LogoBannerSite({
  description
}: LogoSiteType){
  return (
      <Image 
        alt={description}
        src="./img/logo-medio.png"
        width={{sm: 100, md: 260, lg: 360}}
      />        
  )
}
