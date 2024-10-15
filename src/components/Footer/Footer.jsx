import React from 'react'
import styles from "./Footer.module.css"
import logo from "../../../src/images/Logo.png"
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
        <div className={styles.FooterInfo}>
            <p className={styles.BoldText}>Don't miss out on the fun</p>
            <p className={styles.SmText}>Learn African languages forever with Atarodo! Get lifetime access to modules in Yoruba, Hausa, Igbo, Afrikaans, Swahili, Twi, and more. Sign up now!</p>
            <a href='***' className={styles.JoinBtn}>Join the waitlist</a>
        </div>
        <div className={styles.FooterDiv}>
            <div className={styles.CompanyDetails}>
                <img src={logo} alt="logo" className={styles.logo}/>
                <p className={styles.About}>Atarodo is a vibrant online platform dedicated to making African languages accessible and enjoyable for everyone. We believe in the power of cultural connection and strive to create engaging, interactive learning experiences that immerse users in the beauty of African languages, history, and traditions.</p>
            </div>
            <div className={styles.ContactDetails}>
                <p className={styles.ContactUs}>Contact us</p>
                <a className={styles.Address}>contact@atarodo.com</a>
                <div className={styles.Socials}>
                    <a href="" className={styles.SocialLink}><FaFacebook /></a>
                    <a href="" className={styles.SocialLink}><FaLinkedin /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer