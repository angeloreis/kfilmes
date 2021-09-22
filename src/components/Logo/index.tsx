/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './styles.module.scss'

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
    <div className={styles.layoutLogo}>
      <img
        src="./img/logo-medio.png"
        alt={description}
        width={widthImage}
        height={heightImage}
      />
    </div>
  )
}
export default LogoSite
