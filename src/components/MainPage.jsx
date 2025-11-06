import React from 'react'
import styles from './MainPage.module.css';
import BTNGreen from './BTNGreen';
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <div className={styles.main} id='main'>
        <div className={styles.mainInner}>

          <div className={styles.mainContentWrapperGrain}>
           <div className={styles.mainContentWrapper}>
              <div className={styles.mainContent}>
                  
                  <h1><span className={styles.headerNTF}>GreW </span><span className={styles.headerForest}>eCo</span></h1>
                  <p className={styles.mainContentP1}>Invest In A Healthy Future</p>
                  <p className={styles.mainContentP2}>Tokenized Paulownia business plantations are a charitable investment that will yield you approximately ~300% profit over 6 years.</p>
                  <div className={styles.mainBTNWrapper}>
                    <Link to="https://app.nftforest.ge">
                    <BTNGreen  />
                    </Link>
                
                    <Link to={"/paulowniaTree"} >
                    <button className={styles.mainBTN2}>What is Paulownia? </button>
                    </Link>
                  </div>
              </div>
             </div>
            </div>

        </div>
    </div>
  )
}

export default MainPage
