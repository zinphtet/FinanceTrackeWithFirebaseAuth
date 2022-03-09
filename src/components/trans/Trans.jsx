import React from 'react'
import style from './Trans.module.css'
import useFirebase from '../../customHooks/useFirebase'
function Trans({item:{title,amount,id}}) {
    const {deleteDocument} = useFirebase()
    const deleteHandler = ()=>{
          deleteDocument(id)
    }
  return (
    <div className={style.trans}>
       <p className='cause'>{title}</p>
       <p className={style.amount}>$ {amount}</p>
       <p className={style.delete} onClick={deleteHandler}>X</p>
    </div>
  )
}

export default Trans