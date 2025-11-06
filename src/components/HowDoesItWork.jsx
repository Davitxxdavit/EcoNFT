import React from 'react';
import styles from './HowDoesItWork.module.css';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
const HowDoesItWork = () => {
  return (
    <div className={styles.howDoes} id='aboutUs'>
        <div className={styles.howDoesInner}>
            <h2>How does it work?</h2>
            <div className={styles.howDoesItems}>
                <div className={styles.howDoesItem}>
                    <div className={styles.howDoesItemInner}>
                        <div className={styles.howDoesItemInnerIMGWrapper}>
                          <img src={logo1} alt='logo' />
                          <div className={styles.howDoesItemInnerAnimation}></div>
                        </div>
                        
                        <p>We have tokenized a portion of our plantation by issuing tokenized trees (the number is limited to the number of trees).</p>
                    </div>
                </div>
                <div className={styles.howDoesItem}>
                    <div className={styles.howDoesItemInner}>
                        <div className={styles.howDoesItemInnerIMGWrapper}>
                          <img src={logo2} alt='logo' />
                          <div className={styles.howDoesItemInnerAnimation}></div>
                        </div>
                        <p>Holders of tokenized trees gain access to exclusive investment opportunities.</p>
                    </div>
                </div>
                <div className={styles.howDoesItem}>
                    <div className={styles.howDoesItemInner}>
                        <div className={styles.howDoesItemInnerIMGWrapper}>
                          <img src={logo3} alt='logo' />
                          <div className={styles.howDoesItemInnerAnimation}></div>
                        </div>
                        <p>Our tokens are required to purchase any tokenized assets on the platform.</p>
                    </div>
                </div>
                 <div className={styles.howDoesItem}>
                    <div className={styles.howDoesItemInner}>
                        <div className={styles.howDoesItemInnerIMGWrapper}>
                          <img src={logo4} alt='logo' />
                          <div className={styles.howDoesItemInnerAnimation}></div>
                        </div>
                        <p>Tokenized trees give their holders access to exclusive investment opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowDoesItWork
