import React from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'
import bannerImage from '../assets/pizza.jpeg'


function Home() {
  return (
    <div className='home'style={{backgroundImage:`url(${bannerImage})`}}>
      <div className='headContainer'>
<h1>Surya'S pizzaHut</h1>
<p>It's a Finger Licking good</p>
<Link to='/menu'>
<button>OrderNow</button>
</Link>
      </div>
    </div>
  )
}

export default Home