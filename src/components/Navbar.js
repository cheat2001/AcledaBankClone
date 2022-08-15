import React from 'react'
import styles from "../styles/Navbar.module.css";
import {useState,useEffect} from "react";
import Link from '../components/Link';
import HoverContent from '../components/HoverContent';
function Navbar() {

    const [scrollY,setScrollY]=useState(0);
    useEffect(() => {
        const handleScroll = event => {
          console.log('window.scrollY', window.scrollY);
          setScrollY(window.scrollY);        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div style={scrollY>300?{top:"80px"}:{}} className={styles.Container}>
        <nav className={styles.Navbar}>
        <Link title="Personal">
                <HoverContent content={["Credits","Deposits","Cash Management","Funds Transfers","Securities & Trust Services","Referral Support Life Assurance Service","Financial Health Check"]}/>
            </Link>
            <Link title="Business">
                <HoverContent content={["Credits","Deposits","Cash Management","Funds Transfers","Securities & Trust Services","Referral Support Life Assurance Service","Financial Health Check"]}/>
            </Link>
            <Link title="Cards">
                <HoverContent content={["Customer Card","ACLEDA Card","ACLEDA VISA Card","ACLEDA MasterCard Card","ACLEDA JCB Card","ACLEDA UPI Card"]}/>
            </Link>
            <Link title="Digitals">
                <HoverContent content={["ACLEDA Internet Banking","ACLEDA Mobile","ACLEDA E-Shop","ACLEDA E-Commerce","ACLEDA ATM","ACLEDA POS","Term Deposit Machine","Virtual Teller Machine","PayBand","Virtual Card","Top Up Service","Bill Payment","Banking Service Order via E-mail/Fax","Message Alert on Account Information"]}/>
            </Link>
            <Link title="Investor Relations"/>
        </nav>
    </div>
  )
}

export default Navbar