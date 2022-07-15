import React from 'react'
import trigan from '../../../img/trigonometry.png'
import '../Math.css'
import { Link } from 'react-router-dom'

const Physic = () => {
  return (
    <div className='flex items-stretch border rounded border-solid flex-row relative justify-start py-8 px-0 mb-4'>
      <div className="">
        <img className='triganImg h-12 ml-8 mr-5 relative' src={trigan} alt="" />
      </div>
      <div className="flex m-0 p-0 flex-col relative min-w-0 min-h-0 box-border items-stretch">
        <h2>
          <Link className='text-black' to="physic">Физика</Link>
        </h2>
        <ul className='ul'>
          <li >
            <Link className='a' to="">Прямолинейное движение</Link>
          </li>
          <li >
            <Link className='a' to="">Силы и законы движения Ньютона</Link>
          </li>
          <li >
            <Link className='a' to="">Магнитные силы, магнитные поля и закон Фарадея</Link>
          </li>
          <li >
            <Link className='a' to="">Геометрическая оптика</Link>
          </li>
          <li >
            <Link className='a' to="">Космология и астрономия</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Physic