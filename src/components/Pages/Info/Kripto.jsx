import React from 'react'
import trigan from '../../../img/trigonometry.png'
import '../Math.css'
import { Link } from 'react-router-dom';

const Kripto = () => {
  return (
    <div className='flex items-stretch border rounded border-solid flex-row relative justify-start py-8 px-0 mb-4'>
      <div className="">
        <img className='triganImg h-12 ml-8 mr-5 relative' src={trigan} alt="" />
      </div>
      <div className="flex m-0 p-0 flex-col relative min-w-0 min-h-0 box-border items-stretch">
        <h2>
          <Link className='a' to="">Криптография</Link>
        </h2>
        <ul className='ul'>
          <li >
            <Link className='a' to="">Древняя криптографя</Link>
          </li>
          <li>
            <Link className='a' to="">Шифры</Link>
          </li>
          <li>
            <Link className='a' to="">Испытание по криптографии 101</Link>
          </li>
          <li>
            <Link className='a' to="">Современная криптография</Link>
          </li>
          <li>
            <Link className='a' to="">Модульная арифметика</Link>
          </li>
          <li>
            <Link className='a' to="">Тест простоты</Link>
          </li>
          <li>
            <Link className='a' to="">Вероятные алгоритмы</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Kripto