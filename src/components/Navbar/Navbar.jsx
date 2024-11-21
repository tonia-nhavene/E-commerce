import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../assets/luxewear logo2.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [menu, setMenu] =useState("catalog")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} width='60' alt="" />
            <p>LuxeWear</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("catalog")}}> <Link style={{textDecoration: 'none'}} to='/'>Catalog </Link> {menu==="catalog"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} width={'35'}  alt="" /></Link>
            <div className="nav-cart-counter">0</div>
            
        </div>
    </div>
  )
}
export default Navbar
