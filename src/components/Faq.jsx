import React from 'react';
import styles from './Faq.module.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import up from '../assets/upSvg.svg';
import down from '../assets/downSvg.svg';
import i18n from './i18n';
import FaqItem from './FaqItem';
const Faq = () => {
   
      const { t, i18n } = useTranslation();
      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

      const faqData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className={styles.faq} id='faq'>
        <div className={styles.faqInner}>

            <div className={styles.faqHeading}>
                <h2>{t('faqHeading')}</h2>
                <p>{t("faqHeadingP")}</p>
            </div>
          
            {faqData.map((index) => (
              <FaqItem
                  key={index}
                  faqH={t(`faqItem${index}H`)}
                  faqP={t(`faqItem${index}p`)}
               />
            ))}
           

        </div>
    </div>
  )
}

export default Faq
