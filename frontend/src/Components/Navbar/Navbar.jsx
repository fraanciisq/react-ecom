import React, { useState } from 'react'
import './Navbar.css'
import riri_logo from '../Assets/riri_logo2.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
     
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={riri_logo} alt="" />
            <p>Riri Shop</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>} {menu==="shop?"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to ='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar