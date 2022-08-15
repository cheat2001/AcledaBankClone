import React from 'react'
import styles from "../styles/Footer.module.css";
import fb from "../images/fb.png";
import mg from "../images/mg.png";
import ig from "../images/ig.png";
import In from "../images/in.png";
import tw from "../images/tw.png";
import yt from "../images/yt.png";
import tlg from "../images/tlg.png";
import line from "../images/line.png";
import wc from "../images/wc.png";
import tt from "../images/tt.png";
import wa from "../images/wa.png";
import vb from "../images/vb.png";
function Footer() {
  return (
    <div className={styles.Container}>
        <div className={styles.Section1}>
            <a href="#">Site Map</a>
            <a href="#">Form Center</a>
            <a href="#">User Manual</a>
            <a href="#">Security Tips</a>
            <a href="#">Newsletter</a>
            <a href="#">Legal and Privacy</a>
        </div>
        <div className={styles.Section2}>
            <a href="#">Online Visitor:100</a>
            <a href="#">©2022 acleda Bank Plc</a>
        </div>
        <div className={styles.Section3}>
            <a href='#'>Connect With Us On</a>
        </div>
        <div className={styles.Section4}>
            <a href="#"><img src={fb} alt="" /></a>
            <a href="#"><img src={mg} alt="" /></a>
            <a href="#"><img src={ig} alt="" /></a>
            <a href="#"><img src={In} alt="" /></a>
            <a href="#"><img src={tw} alt="" /></a>
            <a href="#"><img src={yt} alt="" /></a>
            <a href="#"><img src={tlg} alt="" /></a>
            <a href="#"><img src={line} alt="" /></a>
            <a href="#"><img src={wc} alt="" /></a>
            <a href="#"><img src={tt} alt="" /></a>
            <a href="#"><img src={wa} alt="" /></a>
            <a href="#"><img src={vb} alt="" /></a>
        </div>
    </div>
  )
}

export default Footer