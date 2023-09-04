import React from 'react'
import "../Styles/Card.css"
export const Card = ({datas,handleclick}) => {
    const {title,img,author,price} = datas
  return (
    <div className='cards'>
        <div className="image_box">
            <img src={img} alt="images" />
        </div> 
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p> price -N{price}</p>
           <button onClick={()=>handleclick(datas)}>Add to cart</button>
        </div>
    </div>
  )
}
