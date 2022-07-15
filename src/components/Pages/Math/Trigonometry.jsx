import React from 'react'
import trigan from '../../../img/trigonometry.png'
import '../Math.css'
import { Link } from 'react-router-dom'

const Trigonometry = () => {
  return (
    <div className='flex items-stretch border rounded border-solid flex-row relative justify-start py-8 px-0 mb-4'>
      <div className="">
        <img className='triganImg h-12 ml-8 mr-5 relative' src={trigan} alt="" />
      </div>
      <div className="flex m-0 p-0 flex-col relative min-w-0 min-h-0 box-border items-stretch">
        <h2>
          <Link className=' text-black' to="trigonometry">Тригонометрия</Link>
        </h2>
        <ul className='ul'>
          <li >
            <Link className='a' to="">Прямоугольные треугольники и тригонометрия</Link>
          </li>
          <li>
            <Link className='a' to="">Тригонометрические функции</Link>
          </li>
          <li>
            <Link className='a' to="">Произвольные треугольники и тригонометрия</Link>
          </li>
          <li>
            <Link className='a' to="">Тригонометрические уравнения и тождества</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Trigonometry