import React from 'react'
import trigan from '../../../img/trigonometry.png'
import '../Math.css'
import { Link } from 'react-router-dom'

const Finance = () => {
  return (
    <div className='flex items-stretch border rounded border-solid flex-row relative justify-start py-8 px-0 mb-4'>
      <div className="">
        <img className='triganImg h-12 ml-8 mr-5 relative' src={trigan} alt="" />
      </div>
      <div className="flex m-0 p-0 flex-col relative min-w-0 min-h-0 box-border items-stretch">
        <h2>
          <Link className='text-black' to="finance">Финансовые рынки и рынки капиталов</Link>
        </h2>
        <ul className='ul'>
          <li >
            <Link className='a' to="">Займы</Link>
          </li>
          <li >
            <Link className='a' to="">Жильё</Link>
          </li>
          <li >
            <Link className='a' to="">Инфляция</Link>
          </li>
          <li >
            <Link className='a' to="">Налоги</Link>
          </li>
          <li >
            <Link className='a' to="">Бухгалтерская и финансовая отчетность</Link>
          </li>
          <li >
            <Link className='a' to="">Акции и облигации</Link>
          </li>
          <li >
            <Link className='a' to="">Инвестионные инструменты, страхование и пенсионные накопления</Link>
          </li>
          <li >
            <Link className='a' to="">Деньги, банковское дело и центральные банки</Link>
          </li>
          <li >
            <Link className='a' to="">Опционы, свопы, фьючерсы, ИЦБ, ОДО и другие деривативы</Link>
          </li>
          <li >
            <Link className='a' to="">Современная экономика</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Finance