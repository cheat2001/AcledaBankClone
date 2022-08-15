import React from 'react'

import logo from "../images/logo.png";
import styles from "../styles/ACOverlay.module.css";
function AcOverlay() {
  return (
    <div className={styles.Container}><img src={logo} alt="" /></div>
  )
}

export default AcOverlay