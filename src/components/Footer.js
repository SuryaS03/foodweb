import React from 'react'
import { Instagram ,Twitter,Facebook,LinkedIn} from '@mui/icons-material'
import '../Styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialmedia'>
            {""}<a href='https://leetcode.com/problemset/'>
            <Instagram/></a>
            <Facebook/>
            <Twitter/>
            <LinkedIn/>
            {""}
        </div>

            <p> &copy; 2021 Surya's pizzaHut</p>

        
        </div>
  )
}

export default Footer