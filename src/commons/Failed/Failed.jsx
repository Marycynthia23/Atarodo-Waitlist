import React from 'react';
import styles from './Failed.module.css'; // Importing the module CSS

const Failed = () => {
  return (
    <div className={styles.failedContainer}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.crossmark}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>
        <h1 className={styles.title}>Payment Failed</h1>
        <p className={styles.message}>
          Unfortunately, your payment could not be processed. Please try again or contact support.
        </p>
        <button className={styles.button} onClick={() => window.location.href = '/retry-payment'}>
          Retry Payment
        </button>
      </div>
    </div>
  );
};

export default Failed;