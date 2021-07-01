import React from 'react'
import * as S from './styles'

interface LogoSiteType {
  description: string
  widthImage?: number
  heightImage?: number
}

const LogoSite: React.FC<LogoSiteType> = ({
  description,
  widthImage,
  heightImage
}) => {
  return (
    <S.layoutLogo>
      <img
        src="./img/logo-medio.png"
        alt={description}
        width={widthImage}
        height={heightImage}
      />
    </S.layoutLogo>
  )
}
export default LogoSite
