import React,{useState} from 'react'
import logo from '../assets/pizzaLogo.png'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import { Button } from '@mui/material';


function Navbar() {
  const [openLinks,setOpenLinks]=useState(false);
  const toggleNavbar=()=>{setOpenLinks(!openLinks)}

  return (<>
    <div className='navbar'>
        <div className='leftSide' id={openLinks?'open':'close'}>
        <img src={logo} alt=''/>
        </div>
        <div className='hiddenLinks'>
        <Link to='/'>Home</Link>
        
        <Link to='/menu'>Menu</Link>
        
        <Link to='/about'>About</Link>
        
        <Link to='/contact'>Contact</Link>

        </div>
        <div className='rightSide'>
          <Link to='/'>Home</Link>
        
          <Link to='/menu'>Menu</Link>
          
          <Link to='/about'>About</Link>
          
          <Link to='/contact'>Contact</Link>
          <Button onClick={toggleNavbar}><ReorderIcon/></Button>
        </div>
    
    </div>
    
</>

  )
}

export default Navbar