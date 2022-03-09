import React from 'react'
import AddForm from '../../components/AddForm/AddForm'
import TransList from '../../components/TransList/TransList'
import './Home.css'
function Home() {
  return (
    <div className='home'>
        <AddForm/>
       <TransList/>
    </div>
  )
}

export default Home