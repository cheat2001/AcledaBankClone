import React from 'react'
import styles from "../styles/Card.module.css";
function Card({Img}) {
  return (
    <div className={styles.Container}>
        <div className={styles.Img}>
            <img src={Img} alt="" />
        </div>
        <div className={styles.Btn}>
            <a href="#">READ MORE</a>
        </div>
    </div>
  )
}

export default Card