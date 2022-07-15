import React from 'react'
import Statistic from './Math/Statistic'
import Trigonometry from './Math/Trigonometry'

import './Math.css'

const Math = () => {
  return (
    <div>
      <h1 className='math py-8 pr-5 pl-80 text-white flex items-center justify-between box-border'>Математика</h1>
      <div className="material my-12 m-auto">
        <Trigonometry />
        <Statistic />
      </div>
    </div>
  )
}

export default Math