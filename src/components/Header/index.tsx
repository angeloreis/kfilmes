import React from 'react'
interface HeaderProps {
  children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className="container-fluid">{children}</header>;  
}