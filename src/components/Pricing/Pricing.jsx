import React from 'react'
import styles from "./Pricing.module.css"
import messageicon from "../../images/messageicon.png"
import checkicon from "../../images/checkicon.png"
import bluebg from "../../images/bluebg.png"


const Pricing = () => {
  return (
    <div className={styles.PricingContainer}>
       <div className={styles.Banner}>
       <div className={styles.BlueBgInfo}>
            <p className={styles.BoldText}>Lifetime Access to Yorùbá  Mastery — Just $199.99!</p>
            <p className={styles.SmText}>Full access to the entire platform for life at a huge discount!</p>
        </div>
        <div className={styles.WhiteBgInfo}>
            <img src={messageicon} className={styles.messageicon}/>
            <p className={styles.Price}><span className={styles.OldPrice}>$300</span> $199.99</p>
            <p className={styles.PriceInfo}>Over 30% discount when you subscribe before launch</p>
            <div className={styles.DivBox}>
                <p className={styles.SubTitle}>Access includes:</p>
                <div className={styles.ListContainer}>
                    <div className={styles.ListBox}>
                        <div className={styles.List}><img src={checkicon} className={styles.checkicon}/><li>Monthly Live Classes</li></div>
                        <div className={styles.List}><img src={checkicon} className={styles.checkicon}/><li>Cultural Insights</li></div>
                    </div>
                    <div>
                    <div className={styles.List}><img src={checkicon} className={styles.checkicon}/><li>Exclusive Content</li></div>
                    <div className={styles.List}><img src={checkicon} className={styles.checkicon}/><li>Rewards System</li></div>
                    </div>
                    <div>
                    <div className={styles.List}><img src={checkicon} className={styles.checkicon}/><li>Engaging video lessons</li></div>
                    <div className={styles.List}><img src={checkicon} className={styles.checkicon}/><li>Community Access</li></div>
                    </div>
                    <div>
                    <div className={styles.List}><img src={checkicon} className={styles.checkicon}/><li>Interactive Quizzes</li></div> 
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Pricing