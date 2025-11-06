
import styles from './App.module.css';
import Diagram from './components/Diagram';
import Faq from './components/Faq';
// import Footer from './components/Footer';
import SwiperTeam from './components/SwiperTeam';
import FourTopic from './components/FourTopic';
import Gallery from './components/Gallery';
import Goals from './components/Goals';
import Header from './components/Header';
import HowDoesItWork from './components/HowDoesItWork';
// import HowDoesSection from './components/HowDoesSection';
import LegalInfoSection from './components/LegalInfoSection';
import MainPage from './components/MainPage'
// import Team from './components/Team';
import Timeline from './components/Timeline';
import SwiperCard from './components/SwiperCard';
function Home() {


  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.pageWrapperInner}>
            <Header />
            <MainPage/>
            <FourTopic />
            <Goals />
            <SwiperTeam />
            <Timeline />
            <Diagram />
            <HowDoesItWork/>
            <SwiperCard />
            <Gallery />
            <Faq />
            <LegalInfoSection/>
            
        </div>
      </div>
    </>
  )
}

export default Home
