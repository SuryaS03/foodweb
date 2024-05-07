import React from 'react'
import '../Styles/Menu.css'

function MenuItem({image,name,price,link}) {
  return (<div className='menuItem'>
    <div  style={{backgroundImage:`url(${image})`}}></div>
    <h1>{name}</h1>
    <p><a href={link}>${price}</a></p>
   
    
    </div>
  )
}

export default MenuItem