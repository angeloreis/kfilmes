/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './styles.module.scss'

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
    <div className={styles.layoutLogoDream}>
      <img
        src="./img/makeDream.png"
        alt={description}
        width={widthImage}
        height={heightImage}
      />
    </div>
  )
}
export default LogoDream
