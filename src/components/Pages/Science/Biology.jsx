import React from 'react'
import trigan from '../../../img/trigonometry.png'
import '../Math.css'
import { Link } from 'react-router-dom'

const Biology = () => {
  return (
    <div className='flex items-stretch border rounded border-solid flex-row relative justify-start py-8 px-0 mb-4'>
      <div className="">
        <img className='triganImg h-12 ml-8 mr-5 relative' src={trigan} alt="" />
      </div>
      <div className="flex m-0 p-0 flex-col relative min-w-0 min-h-0 box-border items-stretch">
        <h2>
          <Link className='text-black' to="biology">Биология</Link>
        </h2>
        <ul className='ul'>
          <li >
            <Link className='a' to="">Введение в биологию</Link>
          </li>
          <li>
            <Link className='a' to="">Вода, кислоты и основания</Link>
          </li>
          <li>
            <Link className='a' to="">Макромалекулы</Link>
          </li>
          <li>
            <Link className='a' to="">Клеточное дыхание</Link>
          </li>
          <li>
            <Link className='a' to="">Передача сигнала между клетками</Link>
          </li>
          <li>
            <Link className='a' to="">ДНК как носитель генетической информации</Link>
          </li>
          <li>
            <Link className='a' to="">Биотехнология</Link>
          </li>
          <li>
            <Link className='a' to="">Бактерии и ахреи</Link>
          </li>
          <li>
            <Link className='a' to="">Вирусы</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Biology