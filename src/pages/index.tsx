/* eslint-disable @next/next/no-img-element */
import { NextPage  } from 'next'
import LogoSite from '../components/Logo'
import LogoDream from '../components/LogoDream'
import { AboutUs } from '../components/AboutUs'
import { GotToTop } from '../components/GoToTop'
import HeaderTitleSection from '../components/HeaderSection'
import OperateArea from '../components/OperateArea'

import { Header } from '../components/Header'
import Menu from '../components/Menu'

import styles from './home.module.scss'
import { StudioText } from 'components/StudioText'
import { SocialContactService } from 'components/SocialContactFooter'
import { FormContact } from 'components/FormContact'

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
      <div>
        <HeaderTitleSection
          descriptionLine="Quem Somos?"
        />
        <AboutUs />    
      </div>        
    </div>
    <div className={styles.contentContainerOperateArea} id="operate-area">
        <HeaderTitleSection
            descriptionLine="Área que Atuamos"
          />
        <OperateArea />      
    </div>
    <div className={styles.contentContainerOurCostumers} id="our-costumers">
        <HeaderTitleSection
            descriptionLine="Nossos Clientes"
          />
        <div>
          <img src="../img/costumers/gov_pa.png" alt="Governo do Estado do Pará" width='150px' height='150px'/>
          <img src="../img/costumers/tcm_pa.png" alt="Tribunal de Contas do Município do Estado do Pará" width='150px' height='150px'/>
          <img src="../img/costumers/shopping_bosque.png" alt="Shopping Bosque" width='150px' height='150px'/>          
          <img src="../img/costumers/citropar.png" alt="Citropar" width='150px' height='150px'/>
          <img src="../img/costumers/cervejaria_dona.png" alt="Cervejaria Dona" width='150px' height='150px'/>
        </div>      
        <div>
          <img src="../img/costumers/amazon_polpas.png" alt="Amazon Polpas" width='150px' height='150px'/>
          <img src="../img/costumers/shopping_metropole.png" alt="Shopping Metrópole" width='150px' height='150px'/>
          <img src="../img/costumers/finama.png" alt="Faculdade Finama" width='150px' height='150px'/>          
          <img src="../img/costumers/csb.png" alt="CSB" width='150px' height='150px'/>
          <img src="../img/costumers/stetic_class.png" alt="Stetic Class" width='150px' height='150px'/>
        </div>
    </div>
    
    <div className={styles.contentContainerStudio} id="studio">        
          <HeaderTitleSection
            descriptionLine="estúdio completo"
          />
          <div className={styles.contentContainer}>
            <div className={styles.imageStudio}>
              <img src="../img/estudio_completo.png" alt="Estúdio completo" width='273px'/>
            </div>              
            <StudioText />
          </div>          
    </div>
    <div className={styles.contentContainerStudio} id="contact">
        <HeaderTitleSection
            descriptionLine="Contato"
          />
          <div className={styles.contentContainer}>
            <FormContact />
            <SocialContactService />     
          </div>
    </div>
    <div>
      <GotToTop />
    </div>      
  </>    
  )
}

export default Home
