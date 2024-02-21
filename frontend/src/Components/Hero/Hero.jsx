import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import riri_image1 from '../Assets/riri_image1.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
    </div>
    <div className="hero-latest-button">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt="" />
    </div>
</div>
    <div className="hero-right">
        <img src={riri_image1} alt="" />

    </div>
 </div>
  )
}

export default Hero