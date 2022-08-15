import React from 'react'
import styles from "../styles/BlockContent.module.css";
import { SupportIcon,SpeakerphoneIcon,RefreshIcon ,CashIcon,CreditCardIcon,MapIcon} from '@heroicons/react/outline'
function BlockContent() {
  return (
    <div className={styles.Container}>
        <a href="#">
          <SupportIcon style={{width:"50px",color:"white"}}/>
          <p>Special offer</p>
        </a>
        <a href="#">
          <SpeakerphoneIcon style={{width:"50px",color:"white"}}/>
          <p>Latest News</p>
        </a>
        <a href="#">
          <RefreshIcon style={{width:"50px",color:"white"}}/>
          <p>Products Updates</p>
        </a>
        <a href="#">
          <CashIcon style={{width:"50px",color:"white"}}/>
          <p>Deposit</p>
        </a>
        <a href="#">
          <CreditCardIcon style={{width:"50px",color:"white"}}/>
          <p>Credit</p>
        </a>
        <a href="#">
          <MapIcon style={{width:"50px",color:"white"}}/>
          <p>Contact Us</p>
        </a>
    </div>
  )
}

export default BlockContent