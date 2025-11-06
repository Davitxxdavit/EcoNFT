import React from 'react';
import styles from './Goals.module.css';
const Goals = () => {
  return (
    <div className={styles.goalsBg}>
      <div className={styles.goalItemsWrapper}>
            <div
            onClick={() =>  window.open('https://sdgs.un.org/goals', '_blank')}
             className={styles.goalItem1}>
                <div className={styles.goalItem1InnerLogo}></div>
                <div className={styles.goalItem1Inner}>
                    <h3>Our Contribution to Sustainable Development</h3>
                    <p>We are proud to play our part in achieving the Sustainable Development Goals (SDGs). Currently, we are actively addressing 7 out of the 17 SDGs.</p>
                </div>
            </div>
            <div className={styles.goalItem}>
                <h3>SDG 1: No Poverty</h3>
                <p>We are working on projects that uplift vulnerable communities and promote economic growth.</p>
            </div>
            <div className={styles.goalItem}>
                <h3>SDG 5: Gender Equality</h3>
                <p>We support initiatives that empower women and promote gender equality across all sectors.</p>
            </div>
            <div className={styles.goalItem}>
                <h3>SDG 8: Decent Work and Economic Growth</h3>
                <p>Our projects foster inclusive economic growth, decent job creation, and equitable opportunities.</p>
            </div>
            <div className={styles.goalItem}>
                <h3>SDG 12: Responsible Consumption and Production</h3>
                <p>We advocate for sustainable practices in production and consumption to minimize waste.</p>
            </div>
            <div className={styles.goalItem}>
                <h3>SDG 13: Climate Action</h3>
                <p>We support global efforts to mitigate climate change through sustainable practices</p>
            </div>
            <div className={styles.goalItem}>
                <h3>SDG 15: Life on Land</h3>
                <p>We are dedicated to protecting ecosystems, restoring habitats, and promoting biodiversity.</p>
            </div>
            <div className={styles.goalItem}>
                <h3>SDG 17: Partnerships for the Goals</h3>
                <p>Collaboration with global partners drives the success of our initiatives for sustainable development.</p>
            </div>
      </div>
    </div>
  )
}

export default Goals
