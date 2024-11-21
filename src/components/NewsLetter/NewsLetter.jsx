import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers In Your Email</h1>
        <p>Subscribe To Our News Letter And Get Updates</p>
        <div>
            <input type="email" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>

    </div>
  )
}
export default NewsLetter