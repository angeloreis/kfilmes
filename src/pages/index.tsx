import { NextPage } from 'next'
import LogoSite from '../components/Logo'
import LogoDream from '../components/LogoDream'
import { AboutUs } from '../components/AboutUs'
import { GotToTop } from '../components/GoToTop'
import HeaderTitleSection from '../components/HeaderSection'
import OperateArea from '../components/OperateArea'

import { Header } from '../components/Header'
import Menu from '../components/Menu'

import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <>
    <title>K Filmes | Você sonha e a gente Realiza!</title>
    <Header>
      <Menu />
    </Header>
    <div className={styles.contentContainer} id="home">
          <LogoSite description="K Filmes" widthImage={400} />
          <LogoDream
            description="Você Sonha e a Gente Realiza"
            widthImage={400}
          />
    </div>

    
    <div className={styles.contentContainer} id="about-us">
        <AboutUs />    
    </div>
    <div className={styles.contentContainerOperateArea} id="operate-area">
        <HeaderTitleSection
            descriptionFirstline="Área que"
            descriptionSecondLine="ATUAMOS"
          />
        <OperateArea />      
    </div>
    <div>
      <GotToTop />
    </div>      
  </>    
  )
}

export default Home
