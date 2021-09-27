import React from 'react'
import styles from './styles.module.scss'
interface HeaderTitleSectionProps {
  descriptionLine: string
}

const HeaderTitleSection = ({
  descriptionLine
}: HeaderTitleSectionProps) => {
  return (
    <div className={styles.WrapperHeaderSection}>
      <p>
        {descriptionLine.toUpperCase()}
      </p>
      
    </div>
  )
}

export default HeaderTitleSection
