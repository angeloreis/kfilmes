import React from 'react'
import * as S from './styles'

interface LogoDreamType {
  description: string
  widthImage?: number
  heightImage?: number
}

const LogoDream: React.FC<LogoDreamType> = ({
  description,
  widthImage,
  heightImage
}) => {
  return (
    <S.layoutLogoDream>
      <img
        src="./img/makeDream.png"
        alt={description}
        width={widthImage}
        height={heightImage}
      />
    </S.layoutLogoDream>
  )
}
export default LogoDream
