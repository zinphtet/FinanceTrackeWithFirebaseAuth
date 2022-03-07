import React from 'react'
import './Header.css'
import {useNavigate} from 'react-router-dom'
function Header() {
  const navigate = useNavigate()
  return (
    <div className='header'>
        <div className="brand">
          <li onClick={()=> navigate('/')}> MyMoney</li>  
        </div>
        <ul className='nav_ul'>
            <li onClick={()=> navigate('/login')}>Login</li>
            <li onClick={()=> navigate('/signup')}>Sign Up</li>
            <li className='logout'>Logout</li>
        </ul>
    </div>
  )
}

export default Header