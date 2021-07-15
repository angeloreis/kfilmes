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
      <S.DescriptionFirstLine>
        {descriptionFirstline.toUpperCase()}
      </S.DescriptionFirstLine>
      <S.DescriptionSecondLine>
        {descriptionSecondLine.toUpperCase()}
      </S.DescriptionSecondLine>
    </S.WrapperHeaderSection>
  )
}

export default HeaderTitleSection
