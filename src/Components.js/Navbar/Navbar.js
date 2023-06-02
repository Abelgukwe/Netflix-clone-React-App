import React from 'react'
import "./Navbar.css"
import { FiBell } from 'react-icons/fi';


function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix-logo" />
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        <div style={{display:'flex',left:'150px',position:'fixed'}}>
        <h4 className='category'>Home</h4>
        <h4 className='category'>TV Shows</h4>
        <h4 className='category'>Movies</h4>
        <h4 className='category'>Popular</h4>
        </div>
        <div style={{display:'flex',right:'80px',position:'fixed'}}>
        <h4 className='user'>Ridin</h4>
        <FiBell style={{color:'white', paddingTop:'5px'}} />
        </div>

      
    </div>
  )
}

export default Navbar
