import React, { useEffect, useState } from 'react'
import "../Styles/Cart.css"
export const Cart = ({ cart, setcart, handlechange }) => {
    const [price, setprice] = useState(0)

    const handleprice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
         ))
         setprice(ans);
    }
    useEffect(()=>{
        handleprice();
    })

    const handleremove = (id) => {
      const remove =   cart.filter((item)=> item.id !== id)
        setcart(remove)
    }
return (
    <article>
        {cart?.map((item) => (
            <div className="cart_box" key={item.id}>
                <div className="cart_img">
                    <img src={item.img} alt="img" />
                    <p>{item.title}</p>
                </div>
                <div>
                    <button onClick={()=> handlechange(item, +1)}>+</button>
                    <button>{item.amount}</button>
                    <button onClick={()=> handlechange(item, -1)}>-</button>
                </div>
                <div>
                    <span>{item.price}</span>
                    <button onClick={()=> handleremove(item.id)}>Remove</button>
                </div>

            </div>
        ))}
        <div className='total'>
            <span>total price of your cart</span>
            <span>N-{price}</span>
        </div>
    </article>
)
}
