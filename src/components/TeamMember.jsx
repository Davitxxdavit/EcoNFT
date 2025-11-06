import React from 'react';
import styles from './TeamMember.module.css';


const TeamMember = ({bgImage, name, job, about,click }) => {
  return (
    <div onClick={click} className={styles.teamMember}>
        <div className={styles.teamMemberBorder}>
            <div className={styles.teamMemberWrapper}>
             <img src={bgImage} className={styles.bgImg}  />
                <div className={styles.teamMemberWrapperContent}>        
                    <div className={styles.personNameWrapper}>
                        <h2>{name}</h2>
                     
                    </div>
                    <p>{about}</p>
                    <div className={styles.linkWrapper}>
                        <h3>{job}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamMember
