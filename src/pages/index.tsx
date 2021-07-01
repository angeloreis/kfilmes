import { NextPage } from 'next'
import Menu from 'components/Menu'
import Header from 'components/Header'
import LogoSite from 'components/Logo'
import LogoDream from 'components/LogoDream'
import AboutUs from 'components/AboutUs'
import HeaderTitleSection from 'components/HeaderSection'
import * as S from '../styles/styles'

const Home: NextPage = () => {
  return (
    <S.Wrapper id="#home">
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
      <S.layoutAboutUs>
        <AboutUs>
          <HeaderTitleSection
            descriptionFirstline="Quem"
            descriptionSecondLine="SOMOS?"
          />
        </AboutUs>
      </S.layoutAboutUs>
    </S.Wrapper>
  )
}

export default Home
