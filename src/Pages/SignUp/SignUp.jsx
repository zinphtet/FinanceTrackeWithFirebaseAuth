import React from 'react'
import  style from './SignUp.module.css';
import {useState} from 'react'
import useSignup from '../../customHooks/useSignup';
import { auth } from '../../firebase/firebase';



function SignUp() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {isPending , error , signup} = useSignup();
 

 const nameHanlder = (e)=>{
     setName(e.target.value)
 }
 const emailHandler = (e)=>{
  setEmail(e.target.value)
}
const passwordHandler = (e)=>{
  setPassword(e.target.value)
}

const signUpFormSubmit = (e)=>{
  e.preventDefault();

  console.log(name , email , password)
  signup(auth,email,password,name)
  
  setName('')
  setEmail('')
  setPassword('')
}

  return (
    <div className={style.sign_up_page}> 
           <form  className={style.signup_form} onSubmit={signUpFormSubmit}>
               <div 
               >
               <input
                type="text" 
                placeholder='Name'
                value={name}
                onChange={nameHanlder}
                required
                 />

               </div>
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
               <button type='submit' className='btn'>{isPending ? 'Loading...': 'Sign Up'}</button> 
               {error && <div>{error}</div>}
            </div>
           </form>
    </div>
  )
}

export default SignUp