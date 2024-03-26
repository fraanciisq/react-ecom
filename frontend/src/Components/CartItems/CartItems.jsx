import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return (
                    <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon'/>
                            <p>{e.name}</p>
                            <p>₱{e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>₱{e.new_price*cartItems[e.id]}</p>
                            <img className= 'cartitems-remove-icon'src={remove_icon} onClick={()=>{removeFromCart(e.id)}}alt="" />
                        </div>
                        <hr />
                    </div>
                );
            }
            return null; // Add this line to explicitly return null when cartItems[e.id] is not greater than 0
        })}
    </div>

  )
}

export default CartItems