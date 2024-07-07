import React from 'react'

const Footer = () => {
  return <section className='footer'>
    <div className='share'>
        <a href="#" className='fab fa-facebook'></a>
        <a href="#" className='fab fa-instagram'></a>
        <a href="#" className='fab fa-twitter'></a>
        <a href="#" className='fab fa-linkedin'></a>
        <a href="#" className='fab fa-pinterest'></a>
    </div>
    <div className='links'>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Menu</a>
        <a href="#">Gallery</a>
        <a href="#">Review</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
    </div>
    <div className='credit'>
        Created By <span>Saud Siraj</span>| All right reserved
    </div>
  </section>
}

export default Footer