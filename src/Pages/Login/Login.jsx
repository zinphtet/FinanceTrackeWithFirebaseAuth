import React,{useState} from 'react'
import style from './Login.module.css';
import useLogin from '../../customHooks/useLogin';
import { auth } from '../../firebase/firebase';

function Login() {
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {isPending, error , login} = useLogin();

  const emailHandler = (e)=>{
    setEmail(e.target.value)
  }
  const passwordHandler = (e)=>{
    setPassword(e.target.value)
  }
  const loginHandler = (e)=>{
    e.preventDefault();
    login(auth,email,password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className={style.login_page}> 
    <form  className={style.login_form} onSubmit={loginHandler}>
    <div 
              >
               <input 
               type="email" 
               placeholder='Email'
               value={email}
               onChange={emailHandler}
               required
                />
              </div>
              <div 
              >
              <input
               type="password"
                placeholder='Password'
                value={password}
                onChange={passwordHandler}
                required
                 />
              </div>
        <div >
        <button type='submit' className='btn'>{isPending? 'Loading...':'Login'}</button> 
        {error && <div>{error}</div>}      
     </div>
    </form>
</div>
  )
}

export default Login