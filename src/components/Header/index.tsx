import React from 'react'
import styles from './styles.module.scss'

interface HeaderProps {
  children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className={styles.layoutHeader}>{children}</header>
}