import React from 'react'
import styles from "../styles/Alert.module.css";
function Alert() {
  return (
    <div className={styles.Container}>
        <p>⚠️Please do not share your PIN/OTP to someone! ACLEDA Bank staff will never call you asking for PIN/OTP or doing any transactions. <a href="#">Read more...</a></p>
    </div>
  )
}

export default Alert