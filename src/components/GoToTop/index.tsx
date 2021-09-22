import React from 'react'
import styles from './styles.module.scss'

export const GotToTop: React.FC = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className={styles.WrapperDiv}>
      <div className={styles.ClickButton} onClick={scrollTop}>
        <span className={styles.ArrowUpSpan}>top</span>
      </div>
    </div>
  )
}