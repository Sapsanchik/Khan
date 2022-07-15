import React from 'react'
import trigan from '../../../img/trigonometry.png'
import '../Math.css'
import { Link } from 'react-router-dom';

const Stav = () => {
  return (
    <div className='flex items-stretch border rounded border-solid flex-row relative justify-start py-8 px-0 mb-4'>
      <div className="">
        <img className='triganImg h-12 ml-8 mr-5 relative' src={trigan} alt="" />
      </div>
      <div className="flex m-0 p-0 flex-col relative min-w-0 min-h-0 box-border items-stretch">
        <h2>
          <Link className='a' to="">Займы и процентные ставки</Link>
        </h2>
        <ul className='ul'>
          <li >
            <Link className='a' to="">Основы сложных процентов</Link>
          </li>
          <li>
            <Link className='a' to="">Основы процентных ставок</Link>
          </li>
          <li>
            <Link className='a' to="">Кредитные карты и кредиты</Link>
          </li>
          <li>
            <Link className='a' to="">Непрерывные сложные проценты и число е</Link>
          </li>
          <li>
            <Link className='a' to="">Текущая стоимость</Link>
          </li>
          <li>
            <Link className='a' to="">Личное банкротство</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Stav