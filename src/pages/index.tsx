import { NextPage } from 'next'
import Menu from 'components/Menu'
import Header from 'components/Header'
import LogoSite from 'components/Logo'
import LogoDream from 'components/LogoDream'
import AboutUs from 'components/AboutUs'
import HeaderTitleSection from 'components/HeaderSection'
import GotToTop from '../components/GoToTop'
import OperateArea from '../components/OperateArea'

import * as S from '../styles/styles'

const Home: NextPage = () => {
  return (
    <S.WrapperContainer>
      <S.Wrapper id="home">
        <Header>
          <Menu />
        </Header>
        <S.layoutMainSub>
          <LogoSite description="K Filmes" widthImage={400} />
          <LogoDream
            description="Você Sonha e a Gente Realiza"
            widthImage={400}
          />
        </S.layoutMainSub>
        <S.dividerLayout />
        <S.layoutAboutUs id="about-us">
          <AboutUs />
        </S.layoutAboutUs>
        <S.layoutOperateArea id="operate-area">
          <OperateArea>
            <HeaderTitleSection
              descriptionFirstline="Área que"
              descriptionSecondLine="ATUAMOS"
            />
          </OperateArea>
        </S.layoutOperateArea>
        <S.dividerLayout />
        <GotToTop />
      </S.Wrapper>
    </S.WrapperContainer>
  )
}

export default Home
