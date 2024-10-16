import React, { useState } from 'react';
import styles from './VideoBtn.module.css';
import VideoModal from '../VideoModal/VideoModal';

const VideoBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
        <div className={styles.Black}>
      <button className={styles.communityButton} onClick={handleOpenModal}>
        <span className={styles.beatingCircle}></span>
        Hear from our community
      </button>
      </div>
      {showModal && <VideoModal onClose={handleCloseModal} />}
    </div>
  );
};

export default VideoBtn;
