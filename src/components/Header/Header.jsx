import React from 'react'
import './Header.css'
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react'
import {AuthContext}  from '../../AuthContext/AuthContex'
import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';


function Header() {
  const navigate = useNavigate()
  const {user , dispatch} = useContext(AuthContext)
 
  return (
    <div className='header'>
        <div className="brand">
          <li onClick={()=> navigate('/')}> MyMoney</li>  
        </div>
        <ul className='nav_ul'>
           {
             !user && <>
              <li onClick={()=> navigate('/login')}>Login</li>
              <li onClick={()=> navigate('/signup')}>Sign Up</li>
             </>
           }
           {
             user && <>
                    <li >Hello , {user.displayName || user.user.displayName} </li>
                   <li className='logout' 
                   onClick={async ()=> {
                     alert("Logged Out")
                     await signOut(auth)
                     dispatch({type:'LOG_OUT'})
                    }}
                   >
                     Logout</li>
             </>
           }
       
           
        </ul>
    </div>
  )
}

export default Header