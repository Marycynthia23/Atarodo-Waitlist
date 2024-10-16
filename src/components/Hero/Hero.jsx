import React,{useState, useEffect} from 'react'
import styles from "./Hero.module.css"
import heromockup from "../../images/herobg.png"
import herotag from "../../images/herotagg.png"
import VideoBtn from '../../commons/VideoBtn/VideoBtn'


const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Yorùbá", "Igbo", "Hausa","Swahili","Afrikaans","Fula","Twi","Somali"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.Left}>
        <div className={styles.BoldText}>Speak<br/><span className={styles.ColoredWord}> {words[wordIndex]} </span> <br/>in no time</div>
        <p className={styles.MediumText}>Discover the  richness of African languages and culture with Atarodo.
        Connect your kids to their roots. Explore African languages for business or interest, and unlock the language behind Afrobeats' infectious rhythm.</p>
      <div className={styles.BtnTagContainer}>
      <a href='***' className={styles.JoinBtn}>Join the waitlist</a>
      <img src={herotag} alt="herotag" className={styles.herotag}/>
      </div>

      </div>
      <div className={styles.Right}>
        {/* <img src={heromockup} alt="heromockup" className={styles.heromockup}/> */}
        <VideoBtn/>
      </div>
    </div>
  )
}

export default Hero