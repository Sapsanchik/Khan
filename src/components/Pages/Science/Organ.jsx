import React from 'react'
import trigan from '../../../img/trigonometry.png'
import '../Math.css'
import { Link } from 'react-router-dom'

const Organ = () => {
  return (
    <div className='flex items-stretch border rounded border-solid flex-row relative justify-start py-8 px-0 mb-4'>
      <div className="">
        <img className='triganImg h-12 ml-8 mr-5 relative' src={trigan} alt="" />
      </div>
      <div className="flex m-0 p-0 flex-col relative min-w-0 min-h-0 box-border items-stretch">
        <h2>
          <Link className='text-black' to="organ">Органическая химия</Link>
        </h2>
        <ul className='ul'>
          <li >
            <Link className='a' to="">Структура и связи</Link>
          </li>
          <li >
            <Link className='a' to="">Резонанс кислоты и основания</Link>
          </li>
          <li >
            <Link className='a' to="">Алканы, циклоалканы и функциональные группы</Link>
          </li>
          <li >
            <Link className='a' to="">Стереохимия</Link>
          </li>
          <li >
            <Link className='a' to="">Реакции замещения и Элиминирования</Link>
          </li>
          <li >
            <Link className='a' to="">Алкены и алкины</Link>
          </li>
          <li >
            <Link className='a' to="">Ароматические соединения</Link>
          </li>
          <li >
            <Link className='a' to="">Амины</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Organ