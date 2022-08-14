import React from 'react'
import styles from '../styles/HoverContent.module.css';
function HoverContent({content}) {
    console.log(content);
  return (
    <div className={styles.Container}>
        {content.map(cont=><a href='#'>{cont}</a>)}
    </div>
  )
}

export default HoverContent