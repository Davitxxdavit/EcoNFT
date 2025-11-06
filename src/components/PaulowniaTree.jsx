import React from 'react';
import styles from './PaulowniaTree.module.css';
import { Link } from 'react-router-dom';
import BTNGreenSmall from './BTNGreenSmall';
const PaulowniaTree = () => {
  return (
    <div className={styles.paulowniaTree} >
        <div className={styles.paulowniaTreeHeader}>
            <Link to="/">Back to Home</Link>
        </div>
        <div className={styles.paulowniaTreeInner}>
            <div className={styles.paulowniaTreeHeading}>
                <div className={styles.paulowniaTreeHeadingInner}>
                <h1>Paulownia Tree</h1>
                <p>Known for its remarkable growth rate, environmental benefits, and high-quality timber, the Paulownia tree is a sustainable solution for a greener planet.</p>
                </div>
                <div className={styles.paulowniaTreeIMG}></div>
            </div>

            <div className={styles.PaulowniaTreeAdvantages}>
                <div className={styles.advantagesHeading}>
                    <div className={styles.advantagesHeadingInner}>
                        <h2>Advantages of the Paulownia Tree</h2>
                        <p>The Paulownia tree, often hailed as the "miracle tree," boasts a remarkable array of advantages that span environmental, economic, and practical applications. Native to China, this exceptionally fast-growing hardwood has garnered global attention for its unique properties and versatility.</p>
                    </div>
                    <Link to="https://app.nftforest.ge">
                        <BTNGreenSmall />
                    </Link>
                    
                </div>
                {/* <div className={styles.advantagesSection1}>
                  
                </div> */}

                <div className={styles.advantagesSection2}>

                  <div className={styles.advantagesSection2Item}>
                        <h4>Unmatched Growth Speed</h4>
                        <p> Paulownia is the fastest-growing hardwood tree, reaching maturity in a fraction of the time required by traditional forest species.</p>
                    </div>
                    <div className={styles.advantagesSection2Item}>
                        <h4>High-Yield Timber Production</h4>
                        <p>It offers a rapid return on investment, yielding up to one cubic meter of commercially valuable timber per tree in as few as seven years.</p>
                     </div>
                     <div className={styles.advantagesSection2Item}>
                        <h4>Versatile, High-Quality Wood</h4>
                        <p>The timber is prized for its unique combination of being extremely lightweight while also being strong, stable, and resistant to rot.</p>
                    </div>
                     <div className={styles.advantagesSection2Item}>
                        <h4>Powerful Carbon Sequestration</h4>
                        <p>4-10 times faster Absorbs CO₂,It acts as a highly effective carbon sink, absorbing atmospheric CO₂ at a rate significantly greater than most other trees.</p>
                    </div>
                     <div className={styles.advantagesSection2Item}>
                        <h4>Effortless Sustainability</h4>
                        <p>The tree naturally regenerates from its stump after harvesting (coppicing), allowing for multiple timber cycles from a single planting.</p>
                    </div>
                      <div className={styles.advantagesSection2Item}>
                        <h4>honey, carbon credits By-products</h4>
                        <p>Its value extends beyond wood, offering additional income from by-products like premium honey and the generation of carbon credits.</p>
                    </div>
                </div>

                <div className={styles.advantagesSection3}>

                </div>

            </div>

            <div className={styles.whyChoose}> 
                    <h2>Why Choose Paulownia Tree?</h2>
                    <div className={styles.whyChooseItems}>
                        <div className={styles.whyChooseItem}>
                            <h3>Eco-Friendly</h3>
                            <p>The Paulownia tree absorbs significant amounts of carbon dioxide, helping to combat climate change.</p>
                        </div>
                        <div className={styles.whyChooseItem}>
                            <h3>Economic Benefits</h3>
                            <p>With its fast growth and high-quality timber, this tree provides excellent financial returns for farmers and businesses.</p>
                        </div>
                        <div className={styles.whyChooseItem}>
                            <h3>Resilient and Durable</h3>
                            <p>Known for its ability to regenerate after being cut, the Paulownia tree is a long-term investment in sustainability.</p>
                        </div>
                        </div>

                        <Link to="https://app.nftforest.ge">
                        <BTNGreenSmall />
                    </Link>
                    </div>
            </div>
        </div>

  )
}

export default PaulowniaTree
