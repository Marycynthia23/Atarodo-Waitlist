import React from 'react';
import styles from './Success.module.css'; // Importing the module CSS

const Success = () => {
  return (
    <div className={styles.successContainer}>
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
            className={styles.checkmark}
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h1 className={styles.title}>Payment Successful</h1>
        <p className={styles.message}>
          Thank you for your purchase! Your payment has been successfully processed.
        </p>
        <button className={styles.button} onClick={() => window.location.href = '/'}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;