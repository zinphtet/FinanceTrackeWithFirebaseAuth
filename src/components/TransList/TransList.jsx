import React from 'react'
import Trans from '../trans/Trans'
import './TransList.css'
import useFirebase from '../../customHooks/useFirebase'

function TransList() {
  const {documents} = useFirebase()
  return (
    <div className='translist'>
        {
          documents.map((item,i)=>{
               return <Trans key={i} item={item} />
            })
        }
    </div>
  )
}

export default TransList