import React, { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import the chevron icon

import styles from "./Faq.module.css"

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle active accordion
    };
  
    const accordionData = [
      { title: 'What age groups is Atarodo for?', content: 'Age groups content here...' },
      { title: 'What do I get with the lifetime subscription?', content: 'Lifetime subscription content here...' },
      { title: 'How long will I have access to the lessons?', content: 'Access to lessons content here...' },
    ];

    
  return (
    <div className={styles.FaqContainer}>
        <h2 className={styles.BoldText}>Got Questions?</h2>
        <p className={styles.SmText}>We’ve got answers.</p>

        <div className={styles.accordionContainer}>
      {accordionData.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={classNames(styles.accordionTitle, { [styles.active]: activeIndex === index })}
            onClick={() => handleAccordionClick(index)}
          >
            {item.title}
            {/* Icon */}
            <span className={classNames(styles.icon, { [styles.rotate]: activeIndex === index })}>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </button>
          <div
            className={classNames(styles.accordionContent, { [styles.open]: activeIndex === index })}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Faq