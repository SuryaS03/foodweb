import React from 'react'
import {MenuList}from'../DisplayLists/MenuList'
import { MenuItem } from '@mui/material'
import { Key } from '@mui/icons-material'

function Menu() {
  return (
    <div className='menu'>
        {""}
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>{MenuList.map((MenuItem,Key)=>{
            return <div>{MenuItem.name} </div>

        })}


        </div>
    </div>
  )
}

export default Menu;