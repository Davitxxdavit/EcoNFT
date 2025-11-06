import React, { useState } from 'react';
import minus from '../assets/minus-solid-full.svg';
import plus from '../assets/plus-solid-full.svg';
import styles from './Faq.module.css';
const FaqItem = ({faqP, faqH}) => {

    const [isOn, setIsOn] = useState(false);

    const handleEvent1 = () => {
     return   setIsOn(!isOn)
    }
  return (
    <div>
       <div onClick={handleEvent1}  className={styles.faqDocs}>
                      <div className={styles.faqDocsHWrapper}>
                        <img className={styles.faqIMG} src={isOn ? minus : plus}  alt='upSvg'/>
                          <h3>{faqH}</h3>
                      </div>
                      <div
                      style={{
                        display:  isOn ? 'block' : 'none'
                      }}
                       className={styles.faqDocsPWrapper}> 
                         <p>{faqP}</p>
                      </div>
                     
                  </div>
    </div>
  )
}

export default FaqItem
