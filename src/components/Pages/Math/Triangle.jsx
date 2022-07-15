import React from 'react'
import trigan from '../../../img/trigonometry.png'
import '../Math.css'
import { Link } from 'react-router-dom';

const Triangle = () => {
  return (
    <div className='flex items-stretch border rounded border-solid flex-row relative justify-start py-8 px-0 mb-4'>
      <div className="">
        <img className='triganImg h-12 ml-8 mr-5 relative' src={trigan} alt="" />
      </div>
      <div className="flex m-0 p-0 flex-col relative min-w-0 min-h-0 box-border items-stretch">
        <h2>
          <Link className='a' to="">Прямоугольные треугольники и тригонометрия</Link>
        </h2>
        <ul className='ul'>
          <li >
            <Link className='a' to="">Отношения сторон в прямоугольных треугольниках</Link>
          </li>
          <li>
            <Link className='a' to="">Введение в тригонометрические соотношения</Link>
          </li>
          <li>
            <Link className='a' to="">Нахождение стороны в прямоугольном треугольнике при помощи тригонометрических соотношений</Link>
          </li>
          <li>
            <Link className='a' to="">Нахождение угла в прямоугольном треугольнике при помощи тригонометрических соотношений</Link>
          </li>
          <li>
            <Link className='a' to="">Синус и косинус дополнительных углов</Link>
          </li>
          <li>
            <Link className='a' to="">Моделирование при помощи прямоугольных треугольников</Link>
          </li>
          <li>
            <Link className='a' to="">Обратные тригонометрические соотношения</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Triangle