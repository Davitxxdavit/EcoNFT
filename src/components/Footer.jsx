import React from 'react';
import styles from './Footer.module.css';
import location from '../assets/location.svg';
import mail from '../assets/mail.svg';
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerAbsolute}>
            <h2>GreWeCo</h2>
        </div>
        <div className={styles.footerInner}>
             {/* <div className={styles.footerLogo}></div> */}
             <div className={styles.footerLinks}>
                <a href='#aboutUs'>About Us</a>
                <a href='#team'>Team</a>
                <a href='#four'>Media</a>
                <a href='#faq'>FAQ</a>
                <a href='#four'>Benefits</a>
             </div>
             <div className={styles.footerLocation}>
                <h3>Where We Work</h3>
                <div className={styles.footerLocationInner}>
                    <address>
                        <div className={styles.footerMail}>
                            <img src={location} alt='locationLogo' />
                            <p>Batumi, GE</p>
                        </div>
                        <div className={styles.footerMail}>
                            <img src={mail} alt='mailLogo' />
                            <a href="mailto:webmaster@example.com">hello@nftforest.ge</a>
                        </div>
                    </address>
                </div>
             </div>

        </div>
    </div>
  )
}

export default Footer
