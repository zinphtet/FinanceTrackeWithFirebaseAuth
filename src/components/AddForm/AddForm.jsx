import React from 'react'
import style from'./AddForm.module.css'
import {useState} from 'react'
import useFirebase from '../../customHooks/useFirebase';

function AddForm() {
  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState('')
  const {addDocument,isPending} = useFirebase()

  const titleHandler = (e)=> setTitle(e.target.value)
  const amountHandler = (e)=> setAmount(e.target.value)

  const addHandler = (e)=>{
    e.preventDefault();
     addDocument({title ,amount})  
       setTitle('')
       setAmount('')
  }

  return (
      <div className={style.addform} onSubmit={addHandler}>
          <form  >
            <input
             type="text"
              placeholder='transaction cause'
              value={title}
              onChange={titleHandler}
              required
              />
            <input
             type="number" 
             placeholder='amount'
             value={amount}
             onChange={amountHandler}
             required
             />
            <button type='submit' className='btn bigbtn'>{isPending ? 'Adding..':'Add'}</button>
           </form>
      </div>
   
  )
}

export default AddForm