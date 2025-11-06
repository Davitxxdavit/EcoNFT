import React from 'react';
import styles from './LegalInfoSection.module.css';
import { Link } from 'react-router-dom';
const LegalInfoSection = () => {
  return (
    <div className={styles.legalInfo}>
      <div className={styles.legalInfoInner}>
        <h2>You can view all the <span className={styles.infoSpan}>Pitch Deck, Documents and Legal information</span> here.</h2>
        <Link to="/investorDocs">
          <button className={styles.mainBTNView}>View</button>
        </Link>
       
      </div>
    </div>
  )
}

export default LegalInfoSection
