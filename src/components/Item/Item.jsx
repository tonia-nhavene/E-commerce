import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} width={300} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                R{props.new_price}
            </div>
            <div className="item-price-old">
            R{props.old_price}
            </div>
        </div>

    </div>
  )
}
export default Item