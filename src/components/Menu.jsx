import React from 'react'
import {menu} from "../Data";

const Menu = () => {
  return <>
    <section className='menu' id='menu'>
        <h1 className='heading'>
            Our <span>Menu</span>
        </h1>
        <div className='box-container'>
            {
                menu.map((item,index) => {
                    return(
                        <div className='box' key={index}>
                            <img src={item.img} alt="menu-img"/>
                            <h3>Zinger Burger with French Fries</h3>
                            <div className='price'>
                                300 Rs <span>450 Rs</span>
                            </div>
                            <a href="#" className='btn'>Add to cart</a>
                        </div>
                    )
                })
            }
        </div>
    </section>
  </>
}

export default Menu