import React from 'react';
import styles from './Timeline.module.css';
import geo from '../assets/ge.png';
import ro from '../assets/ro.png';
import ua from '../assets/ua.png';
const Timeline = () => {
  return (
    <div className={styles.timeline}>
        <div className={styles.timelineInner}>
            <h2>bussines timeline of the project</h2>
            <div className={styles.roadMap}>
                
                <div className={styles.mainLine}>


                    <div className={styles.line1}>
                        <div className={styles.line1Inner}>
                            <div className={styles.line1Inner2}>
                                <div className={styles.line1Inner3}>
                                    <div className={styles.line1Inner3stick}>
                                        <div className={styles.line1Inner3stickContent}>
                                            <h3>NOW</h3>
                                            <hr/>
                                            <div className={styles.line1Inner3stickContentInner}>
                                                <img src={geo} alt='Georgia'/>
                                                <p>50 HA</p>
                                            </div>
                                             <hr className={styles.hrCss1}/>
                                        </div>
                                        <div className={styles.line1Inner3stickBall}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{/*  -------------        line2              ----------------- */}

                    <div className={styles.line2}>
                        <div className={styles.line1Inner}>
                            <div className={styles.line1Inner2}>
                                <div className={styles.line1Inner3}>
                                    <div className={styles.line2Inner3stick}>
                                        <div className={styles.line2Inner3stickContent}>
                                            <h3>2026</h3>
                                            <hr/>
                                            <div className={styles.line1Inner3stickContentInner}>
                                                <img src={geo} alt='Georgia'/>
                                                <p>+150 HA</p>
                                            </div>
                                            <div className={styles.line1Inner3stickContentInner}>
                                                <img src={geo} alt='Georgia'/>
                                                <p>+250 HA</p>
                                            </div>
                                            <hr className={styles.hrCss}/>
                                        </div>
                                        <div className={styles.line2Inner3stickBall}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{/* ---------------line3 ------------------- */}
                    <div className={styles.line3}>
                        <div className={styles.line1Inner}>
                            <div className={styles.line1Inner2}>
                                <div className={styles.line1Inner3}>
                                    <div className={styles.line3Inner3stick}>
                                        <div className={styles.line3Inner3stickContent}>
                                            <h3>2027</h3>
                                            <hr/>
                                            <div className={styles.line1Inner3stickContentInner}>
                                                <img src={geo} alt='Georgia'/>
                                                <p>+300 HA</p>
                                            </div>
                                            <div className={styles.line1Inner3stickContentInner}>
                                                <img src={ro} alt='romania'/>
                                                <p>+400 HA</p>
                                            </div>
                                            <hr className={styles.hrCss1}/>
                                        </div>
                                        <div className={styles.line1Inner3stickBall}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


{/* ---------------line4 ------------------- */}

                     <div className={styles.line4}>
                        <div className={styles.line1Inner}>
                            <div className={styles.line1Inner2}>
                                <div className={styles.line1Inner3}>
                                    <div className={styles.line4Inner3stick}>
                                        <div className={styles.line4Inner3stickContent}>
                                            <h3>2028</h3>
                                            <hr/>
                                            <div className={styles.line1Inner3stickContentInner}>
                                                <img src={geo} alt='Georgia'/>
                                                <p>+450 HA</p>
                                            </div>
                                            <div className={styles.line1Inner3stickContentInner}>
                                                <img src={ua} alt='ukraine'/>
                                                <p>+500 HA</p>
                                            </div>
                                            <hr className={styles.hrCss}/>
                                        </div>
                                        <div className={styles.line2Inner3stickBall}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

{/* ---------------line5 ------------------- */}

                    <div className={styles.line5}>
                        <div className={styles.line1Inner}>
                            <div className={styles.line1Inner2}>
                                <div className={styles.line1Inner3}>
                                    <div className={styles.line5Inner3stick}>
                                        <div className={styles.line5Inner3stickContent}>
                                            <h3>2028-2031</h3>
                                            <hr/>
                                            <div className={styles.line1Inner3stickContentInner1}>
                                                <p>+100,000 HA</p>
                                                <p>Representation in 8-10 countries</p>
                                            </div>
                                            <hr className={styles.hrCss1}/>
                                        </div>
                                        <div className={styles.line1Inner3stickBall}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

{/* ---------------line5 ------------------- */}
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Timeline


