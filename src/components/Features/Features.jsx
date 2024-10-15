import React from 'react'
import styles from "./Features.module.css"
import featuremockup from "../../images/featuremockup.png"
import divider from "../../images/Divider.png"

const Features = () => {
  return (
    <div className={styles.FeaturesContainer}>
        <div className={styles.Left}>
            <h1 className={styles.BoldText}>A fresh take to speaking African languages </h1>
            <p className={styles.MediumText}>Atarodo helps you master African languages in a fun and lively environment. From everyday phrases to cultural gems, Atarodo keeps you engaged from day one.</p>
            <ul className={styles.Ul}>
                <li className={styles.Lists}>
                    <p className={styles.ListHeader}>10 Modules per level</p>
                    <p className={styles.ListSmText}>from beginner to proficiency</p>
                    <img src={divider} alt="divider" className={styles.Divider}/>
                </li>
                <li className={styles.Lists}>
                    <p className={styles.ListHeader}>Cultural insights</p>
                    <p className={styles.ListSmText}>through music, stories and art</p>
                    <img src={divider} alt="divider" className={styles.Divider}/>

                </li>
                <li className={styles.Lists}>
                    <p className={styles.ListHeader}>Dynamic video lessons</p>
                    <p className={styles.ListSmText}>featuring real conversations</p>
                    <img src={divider} alt="divider" className={styles.Divider}/>

                </li>
                <li className={styles.Lists}>
                    <p className={styles.ListHeader}>Quizzes, games & points</p>
                    <p className={styles.ListSmText}>to keep you motivated</p>
                    <img src={divider} alt="divider" className={styles.Divider}/>

                </li>
                <li className={styles.Lists}>
                    <p className={styles.ListHeader}>Earn badges, rewards</p>
                    <p className={styles.ListSmText}>and get African inspired merchandise</p>
                    <img src={divider} alt="divider" className={styles.Divider}/>

                </li>
            </ul>
        </div>
        <div className={styles.Right}>
            <img src={featuremockup} alt="featuremockup" className={styles.featuremockup}/>
        </div>
    </div>
  )
}

export default Features