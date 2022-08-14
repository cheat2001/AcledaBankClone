import React from 'react'
import styles from "../styles/Link.module.css";
import {useState} from "react";
function Link({title,children}) {
    const [action,setAction]=useState(false);
    
  return (
    <div onMouseLeave={()=>setAction(false)} onMouseOver={()=>setAction(true)} className={styles.Container}>
        <a href="#">{title}</a>
        {action===true?children:""}
    </div>
  )
}

export default Link