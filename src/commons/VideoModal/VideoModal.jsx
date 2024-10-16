import React from 'react';
import styles from './VideoModal.module.css';
// import vid from '../../images/'

const VideoModal = ({ onClose }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <video controls className={styles.videoPlayer}>
          <source src="/videos/secondvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
