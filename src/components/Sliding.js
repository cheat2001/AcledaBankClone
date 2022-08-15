import React from 'react'
import styles from "../styles/Sliding.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/slide5.jpg";
import slide6 from "../images/slide6.jpg";
import slide7 from "../images/slide7.jpg";
function Sliding() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <div className={styles.Container}>
      <Slider {...settings}>
          <div>
            <img src={slide1} />
          </div>
          <div>
          <img src={slide2} />
          </div>
          <div>
          <img src={slide3} />
          </div>
          <div>
          <img src={slide4} />
          </div>
          <div>
          <img src={slide5} />
          </div>
          <div>
          <img src={slide6} />
          </div>
          <div>
          <img src={slide7} />
          </div>
        </Slider>
    </div>
  )
}

export default Sliding