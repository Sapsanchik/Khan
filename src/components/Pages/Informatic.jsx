import React from 'react'
import Info from './Info/Info'
import './Math.css'

const Informatic = () => {
  return (
    <div>
      <h1 className='math py-8 pr-5 pl-80 text-white flex items-center justify-between box-border'>Информатика</h1>
      <div className="material my-12 m-auto">
        <Info />
      </div>
    </div>
  )
}

export default Informatic