import React from 'react'
import styles from './styles.module.scss'
interface HeaderTitleSectionProps {
  descriptionFirstline: string
  descriptionSecondLine: string
}

const HeaderTitleSection = ({
  descriptionFirstline,
  descriptionSecondLine
}: HeaderTitleSectionProps) => {
  return (
    <div className={styles.WrapperHeaderSection}>
      <p>
        {descriptionFirstline.toUpperCase()}
      </p>
      <p>
        {descriptionSecondLine.toUpperCase()}
      </p>
    </div>
  )
}

export default HeaderTitleSection
