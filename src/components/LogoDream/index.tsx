/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Figure } from 'react-bootstrap'

interface LogoDreamType {
  description: string
}

const LogoDream: React.FC<LogoDreamType> = ({
  description
}) => {
  return (
    <Figure>
        <Figure.Image
        width="80%"
        alt={description}
        src="./img/makeDream.png"
        className="float-start"
        />
      </Figure>
  )
}
export default LogoDream
