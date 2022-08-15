import React from 'react'
import styles from '../styles/Banner.module.css';
import logo from "../images/logo.png";
import {useEffect,useState,createContext} from 'react';
import Link from '../components/Link';
import HoverContent from '../components/HoverContent';
import NavMobile from './NavMobile';

function Banner() {
    const bannerWidth={
        height:'80px',
        transition:'0.5s ease-in-out',
    }
    const [scrollY,setScrollY]=useState(0);
    useEffect(() => {
        const handleScroll = event => {
          setScrollY(window.scrollY);        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const [toggle,setToggle]=useState(true);
  return (
    <>
    <div style={scrollY>300?bannerWidth:{}} className={styles.Container}>
          <div onClick={()=>setToggle(pre=>!pre)} className={styles.toggle}>
            <div className={`${styles.line}`}></div>
            <div className={`${styles.line}`}></div>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={styles.Logo}>
            <img style={scrollY>300?{width:"150px"}:{width:"250px"}} className={styles.Img} src={logo} alt="" />
          </div>
          <div className={styles.Link}>
             <Link title="about acleda">
                <HoverContent content={["financial information","bank profile","media","career","contact us","download","information"]}/>
            </Link>
             <Link title="search"/>
             <Link title="internet bank">
             <HoverContent content={["Retail Banking","Coporate Banking"]}/>
             </Link>
          </div>
    </div>
    <NavMobile action={toggle}/>
    </>
  )
}

export default Banner