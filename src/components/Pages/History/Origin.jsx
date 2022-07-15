import React from 'react'
import trigan from '../../../img/trigonometry.png'
import '../Math.css'
import { Link } from 'react-router-dom';

const Origin = () => {
  return (
    <div className='flex items-stretch border rounded border-solid flex-row relative justify-start py-8 px-0 mb-4'>
      <div className="">
        <img className='triganImg h-12 ml-8 mr-5 relative' src={trigan} alt="" />
      </div>
      <div className="flex m-0 p-0 flex-col relative min-w-0 min-h-0 box-border items-stretch">
        <h2>
          <Link className='a' to="">Происхождение человека и появление первобытного общества</Link>
        </h2>
        <ul className='ul'>
          <li >
            <Link className='a' to="">Неолитическая революция и зарождение сельского хозяйства</Link>
          </li>
          <li>
            <Link className='a' to="">Древняя Месопатамия</Link>
          </li>
          <li>
            <Link className='a' to="">Древний Египет</Link>
          </li>
          <li>
            <Link className='a' to="">Древнее искусство и артефакты</Link>
          </li>
          <li>
            <Link className='a' to="">Древняя Индия</Link>
          </li>
          <li>
            <Link className='a' to="">Китай времен династии Шан</Link>
          </li>
          <li>
            <Link className='a' to="">Северная и Южная Америки эпохи древности</Link>
          </li>
          <li>
            <Link className='a' to="">Развитие человечества и окружающая среда</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Origin