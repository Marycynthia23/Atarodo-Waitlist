import React from 'react'
import logo from "../../../src/images/Logo.png"
import styles from "./Header.module.css"
import WaitlistModal from '../../commons/WaitlistModal/WaitlistModal'

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
        <div><img src={logo} alt="logo" className={styles.logo}/></div>
        {/* <a href='***' className={styles.JoinBtn}>Join the waitlist</a> */}
        <WaitlistModal buttonLabel="Join the waitlist" />
    </div>
  )
}

export default Header