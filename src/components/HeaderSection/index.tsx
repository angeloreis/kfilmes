import React from 'react'
import * as S from './styles'

interface HeaderTitleSectionProps {
  descriptionFirstline: string
  descriptionSecondLine: string
}

const HeaderTitleSection = ({
  descriptionFirstline,
  descriptionSecondLine
}: HeaderTitleSectionProps) => {
  return (
    <S.WrapperHeaderSection>
      <S.DescriptionFirstLine>{descriptionFirstline}</S.DescriptionFirstLine>
      <S.DescriptionSecondLine>{descriptionSecondLine}</S.DescriptionSecondLine>
    </S.WrapperHeaderSection>
  )
}

export default HeaderTitleSection
