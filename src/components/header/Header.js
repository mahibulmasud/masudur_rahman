import React from 'react'
import logo from '../../assets/images/prothomAloLogo.svg'
import '../../assets/css/style.css'

function Header() {
  return (
    <div className='header'>
        <img src={logo} alt="" />
    </div>
  )
}

export default Header