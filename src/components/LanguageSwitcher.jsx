import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
  };

  return (
    <div className={styles.languageSwitcherWrap}>
      <div className={styles.langBTN} onClick={() => changeLanguage('ka')}>
        <span>GE</span>
      </div>
      <div className={styles.langBTN} onClick={() => changeLanguage('en')}>
        <span>ENG</span>
      </div>
    </div>
  );
}
export default LanguageSwitcher;