import React from 'react'
import AboutImg from "../assets/images/about-img"

const About = () => {
  return <>
    <section className='about'id='about'>
        <h1 className='heading'>
            <span>About</span> us
        </h1>
        <div className='row'>
            <div className='image'>
                <img src={AboutImg} alt="about-img" />
            </div>
            <div className='content'>
                <h3>What makes our food special?</h3>
                <p>
                    Our food is special because we combine fresh, locally-sourced ingredients with  traditional recipes and innovative techniques to create dishes that are both familiar and exciting. Each plate is crafted with care and passion by our skilled chefs, ensuring that every bite is bursting with flavor and  authenticity.
                </p>
                <p>
                    Our food is special because we use the freshest ingredients and time-honored recipes to create unforgettable flavors. Each dish is crafted with passion and precision, ensuring a unique and delicious dining experience
                </p>
                <a href="#" className='btn'>Learn more</a>
            </div>
        </div>
    </section>
  
  </>
}

export default About