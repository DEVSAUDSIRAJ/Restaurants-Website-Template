import React from 'react'
import { review } from '../Data'
import quoteImg from "../assets/images/quote-img.png"

const Review = () => {
  return <section className='review' id='review'>
    <h1 className='heading'>
        Customer <span>Review</span>
    </h1>
    <div className='box-container'>
        {
            review.map((item,index) => {
                return(
                    <div className='box' key={index}>
                        <img src={quoteImg} alt="quote-img" className='quote'/>
                        <p>
                            Dining at Resturant was an exceptional experience from start to finish. The ambiance was warm and inviting, and the staff was incredibly attentive and friendly. Each dish we ordered was a masterpiece, bursting with fresh, vibrant flavors that left us craving more. The attention to detail and passion for quality were evident in every bite. I highly recommend Your Resturant to anyone looking for a truly memorable dining experience. We can't wait to return!
                        </p>
                        <img src={item.img} alt ="review-img" className='user'/>
                        <h3>John Doe</h3>
                        <div className='stars'>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star-half-alt'/>
                        </div>
                    </div>
                )
            })
        }
    </div>
  </section>
}

export default Review