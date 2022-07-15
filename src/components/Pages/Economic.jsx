import React from 'react'
import Finance from './Economic/Finance'
import './Math.css'

const Economic = () => {
  return (
    <div>
      <h1 className='math py-8 pr-5 pl-80 text-white flex items-center justify-between box-border'>Экономика и финансы</h1>
      <div className="material my-12 m-auto">
       <Finance />
      </div>
    </div>
  )
}

export default Economic