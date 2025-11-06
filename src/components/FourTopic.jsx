import React from 'react';
import styles from './FourTopic.module.css';
import tree from '../assets/tree-svgrepo-com.svg';
import zurab from '../assets/member1.png';
const FourTopic = () => {
  return (
    <div className={styles.FourTopicWrapper} id='four'>    
      <div className={styles.parent}>
          <div className={styles.div1}>
            <div className={styles.div1Content}>
            <p>PLOT</p>
              <h2>1 Hectare</h2>
              <div className={styles.div1ContentWrapper}>
                  <div className={styles.div1ContentWrapper1}>
                    <img src={tree} alt='tree logo' />
                    <p>400 Trees</p>
                  </div>
            
                    <div className={styles.div1ContentWrapperInner}>
                      <h2>60 Tons</h2>
                      <p>CO2 consumption per year</p>
                    </div>
                  
               </div>
               <button>Invest</button>
            </div>
            <div className={styles.plotDiv} />
          </div>
          <div className={styles.div2}>
              <h3>Rapid Growth</h3>
              <p>Paulownia trees mature in just 8-12 years, allowing for quicker returns on investment and efficient carbon sequestration.</p>
          </div>
          <div className={styles.div3}>
            <h3>Carbon Sequestration</h3>
            <p>These trees absorb significantly more CO₂ than many other species, aiding in the fight against climate change.</p>
          </div>
          <div className={styles.div4}>
            <h3>Soil Restoration</h3>
            <p>Paulownia trees thrive in poor soils and help regenerate them by adding organic matter and preventing erosion.</p>
          </div>
          <div className={styles.div5}>
            <h3>Economic Value</h3>
            <p>The lightweight yet strong wood of Paulownia is highly valued in various industries, offering profitable returns upon harvest.</p>
          </div>
          <div className={styles.div6}>
            <h3>Biodiversity Support</h3>
            <p>The large, fragrant flowers attract pollinators, enhancing local biodiversity and supporting ecosystems.</p>
         </div>
          <div 
            onClick={() =>  window.open('https://www.entrepreneur.com/ka/zrdis-strategiebi/garemoze-zrunva/467558', '_blank')}
           className={styles.div7}>
            <h2>media about us</h2>
            <p>Environmental Care as the Driving Force of NFT Forest and the Startup's Future Plans</p>
          </div>
          <div className={styles.div8}>

            <div className={styles.div8FounderInner}>
                <div className={styles.div8Content}>
                    <h2>Zurab Meskhidze</h2>
                    <p>Founder of Nftforest</p>
                </div>
                <img src={zurab} alt='founder zurab' />

            </div>
          
          </div>
          <div className={styles.div9}>
            <h2>Benefits of Growing Paulownia Trees</h2>
          </div>
      </div>
    
    </div>
  )
}

export default FourTopic
