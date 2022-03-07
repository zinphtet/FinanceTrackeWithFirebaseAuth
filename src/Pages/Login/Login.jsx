import React from 'react'
import style from './Login.module.css';
function Login() {
  return (
    <div className={style.login_page}> 
    <form  className={style.login_form}>

       <div >
        <input type="email" placeholder='Email' />
       </div>
       <div  >
       <input type="password" placeholder='Password' />
       </div>
        <div >
        <button type='submit' className='btn'>Login</button>       
     </div>
    </form>
</div>
  )
}

export default Login