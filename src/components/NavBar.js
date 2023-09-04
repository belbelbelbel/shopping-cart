import React from 'react'
import "../Styles/NavBar.css"
export const NavBar = ({size,setshow}) => {
  return (
    <nav>
        <div className='nav_box'>
            <span className="my_shop" onClick={()=>setshow(true)}>
                My shopping
            </span>
            <div className="cart" onClick={()=> setshow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>
                    {size}
                </span>
            </div>
        </div>
    </nav>
  )
}
