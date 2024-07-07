import React , {useRef} from 'react'
import Logo from "../assets/images/logo (1).png";
import { cart } from '../Data';

const Header = () => {
    const searchRef = useRef();
    const cartRef = useRef();
    const navBarRef = useRef();

    const searchHandler = () => {
        searchRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        navBarRef.current.classList.remove("active");
    }

    const cartHandler = () => {
        cartRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        navBarRef.current.classList.remove("active");
    }
    
    const navBarHandler = () => {
        navBarRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        cartRef.current.classList.remove("active");
    } 
  return <>
  <header className='header'>
    <a href="#"className='logo'>
        <img src={Logo} alt='logo'/>
    </a>
    <nav className='navbar' ref={navBarRef}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#menu">Menu</a>
        <a href="#products">Gallery</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>
    </nav>
    <div className='icons'>
        <div className='fas fa-search' onClick={searchHandler}></div>
        <div className='fas fa-shopping-cart' onClick={cartHandler}></div>
        <div className='fas fa-bars' id='menu-btn' onClick={navBarHandler}></div>
    </div>
    <div className='search-form active' ref={searchRef}>
        <input type="search" placeholder='Search Here' id='search-box' />
        <label htmlFor="search-box" className='fas fa-search'></label>
    </div>
    <div className='cart-items-container active' ref={cartRef}>
        {
            cart.map((item,index) => {
                return(<div className='cart-item' key={index}>
                    <span className=' fas fa-times'></span>
                    <img src={item.img} alt="img" />
                    <div className='content'>
                        <h3>Cart item 01</h3>
                        <div className='price'>$15.99</div>
                    </div>
                </div>
            )})
        }
        <a href="#" className='btn'>Checkout Now</a>
    </div>
  </header>
  
  </>;
}

export default Header