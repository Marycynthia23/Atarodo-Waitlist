import React, { useState, useEffect } from 'react';import styles from "./Howitworks.module.css";
import image1 from "../../images/stepone.png"
import image3 from "../../images/stepthree.png"
import image2 from "../../images/steptwo.png"
const Howitworks = () => {

  // State to track the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Content for each step
  const stepsContent = [
    {
      title: 'Step 1',
      description: 'Watch Short, Fun Videos and Complete Quizzes',
      image: image1,
    },
    {
      title: 'Step 2',
      description: 'Track Your Progress and Earn Points/Badges',
      image: image2,
    },
    {
      title: 'Step 3',
      description: 'Access New Levels and Get Exclusive Cultural Insights',
      image: image3,
    },
  ];
    
  return (
    <div className={styles.HowitworksContainer}>
        <div className={styles.Info}>
            <p className={styles.BoldText}>Speaking Yoruba with Atarodo is easy and engaging</p>
            <p className={styles.SmText}>You can start with one video at a time, and soon enough you'll be able to have conversations, sing along to songs, and understand the rich history of the African languages and culture.</p>
       </div>
        
       <div className={styles.tabsContainer}>
      {/* Tab Titles */}
      <div className={styles.tabTitles}>
        {stepsContent.map((step, index) => (
          <div
            key={index}
            className={`${styles.tabTitle} ${activeTab === index + 1 ? styles.active : styles.inactive}`}
            onClick={() => setActiveTab(index + 1)}
          >
            <h2 className={styles.StepTitle}>{step.title}</h2>
            <p className={styles.StepDesc}>{step.description}</p>
            {/* Add an underline border to the active tab */}
            {activeTab === index + 1 && <div className={styles.activeBorder}></div>}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {/* Display the corresponding image for each tab */}
        <div className={styles.imageContainer}>
          <img src={stepsContent[activeTab - 1].image} alt={`Content for ${stepsContent[activeTab - 1].title}`} />
        </div>
      </div>
    </div>

    </div>
  )
}

export default Howitworks