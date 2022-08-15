import React from 'react'
import Alert from '../components/Alert';
import BlockContent from '../components/BlockContent';
import Card from '../components/Card';
import Sliding from '../components/Sliding';
import styles from "../styles/Home.module.css";
import Card1 from "../images/card1.jpg";
import Card2 from "../images/card2.jpg";
import Card3 from "../images/card3.jpg";
import Card4 from "../images/card4.jpg";
import Card5 from "../images/card5.jpg";
import Card6 from "../images/card6.jpg";
import Card7 from "../images/card7.jpg";
import Card8 from "../images/card8.jpg";
import Card9 from "../images/card9.jpg";
import Card10 from "../images/card10.jpg";
import Card11 from "../images/card11.jpg";
import Card12 from "../images/card12.jpg";
import Card13 from "../images/card13.jpg";
import Card14 from "../images/card14.jpg";
import Card15 from "../images/card15.jpg";
import Card16 from "../images/card16.jpg";
function Home() {
  return (
    <div className={styles.Home}>
       <Sliding/>
       <BlockContent/>
       <Alert/>
       <div className={styles.CardBlock}>
        <Card Img={Card1}/>
        <Card Img={Card2}/>
        <Card Img={Card3}/>
        <Card Img={Card4}/>
        <Card Img={Card5}/>
        <Card Img={Card6}/>
        <Card Img={Card7}/>
        <Card Img={Card8}/>
        <Card Img={Card9}/>
        <Card Img={Card10}/>
        <Card Img={Card11}/>
        <Card Img={Card12}/>
        <Card Img={Card13}/>
        <Card Img={Card14}/>
        <Card Img={Card15}/>
        <Card Img={Card16}/>
       </div>
    </div>
  )
}

export default Home