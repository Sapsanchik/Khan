import React from 'react'
import './Math.css'
import Biology from './Science/Biology'
import Chemic from './Science/Chemic'
import Cosmos from './Science/Cosmos'
import Electro from './Science/Electro'
import Organ from './Science/Organ'
import Physic from './Science/Physic'

const Science = () => {
  return (
    <div>
      <h1 className='math py-8 pr-5 pl-80 text-white flex items-center justify-between box-border'>Естественные науки</h1>
      <div className="material my-12 m-auto">
        <Biology />
        <Electro />
        <Physic />
        <Organ />
        <Chemic />
        <Cosmos />
      </div>
    </div>
  )
}

export default Science