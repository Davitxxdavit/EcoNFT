import React from 'react'
import styles from './InvestorDocs.module.css'
import NFTForestPDF from '../assets/pdf/NFT-Forest.pdf'
import { Link } from 'react-router-dom'
const InvestorDocs = () => {
  const handleDownload = (pdfPath, filename) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={styles.investorDocs}>
        <div className={styles.investorDocsHeader}>
            <Link to="/">Back to Home</Link>
        </div>
      <div className={styles.investorDocsInner}>
        <h2>Investor Documents</h2>
        <p>Explore our collection of essential documents for investors, including legal certificates, land agreements, and more.</p>
        <div className={styles.investorDocsItems}>
            <div className={styles.investorDocsItem}>
                <h3>Pitch Deck</h3>
                <p>Download our comprehensive pitch deck to learn more about our project and investment opportunities.</p>
                <button 
                  onClick={() => handleDownload(NFTForestPDF, 'NFT-Forest.pdf')}
                  className={styles.downloadBtn}
                >
                  Download PDF
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InvestorDocs
