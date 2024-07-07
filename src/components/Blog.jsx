import React from 'react'
import { blog } from '../Data'

const Blog = () => {
  return <section className='blogs' id='blogs'>
    <h1 className='heading'>
        Our <span>Blogs</span>
    </h1>
    <div className='box-container'>
        {
            blog.map((item,index) => {
                return(
                    <div className='box' key={index}>
                        <div className='image'>
                            <img src={item.img} alt="blog-img"/>
                        </div>
                        <div className='content'>
                            <a href="#" className='title'>
                                Tasty and Refreshing spices
                            </a>
                            <span>
                                by admin/1st July 2024
                            </span>
                            <p>
                                Discover the secrets behind our signature dishes and learn how to recreate them at home. Join us on a culinary journey with expert tips, recipes, and behind-the-scenes stories from our chefs
                            </p>
                            <a href="#" className='btn'>Read More</a>
                        </div>
                    </div>
                )
            })
        }
    </div>
  </section>
}

export default Blog