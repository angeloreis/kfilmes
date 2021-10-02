/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Figure } from 'react-bootstrap'

interface LogoSiteType {
  description: string
}

const LogoSite: React.FC<LogoSiteType> = ({
  description
}) => {
  return (
      <Figure>
        <Figure.Image
        width="80%"
        alt={description}
        src="./img/logo-medio.png"
        className="float-end"
        />
      </Figure>
  )
}

export default LogoSite
