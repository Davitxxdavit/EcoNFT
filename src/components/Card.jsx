import React from 'react';
import gelImage from '../assets/lari-sign-solid-full (2).svg';
import styles from './Card.module.css';
const Card = ({title, paragraph, price, imgURL}) => {
  return (
    <div className={styles.card}>
            <div className={styles.cardWrapper}>
                <img src={`${imgURL}`} alt='tree' />
               <div className={styles.cardContent}>
                <h2>{title}</h2>
                <p>{paragraph}</p>
               </div>
               <div className={styles.cardPrice}>
                    <img className={styles.gelImage} src={gelImage} alt='CardImage'/>
                    <p>{price}</p>
               </div>
            </div>
    </div>
  )
}

export default Card
