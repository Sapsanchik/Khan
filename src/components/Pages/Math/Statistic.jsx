import React from 'react'
import { Link } from 'react-router-dom'
import stat from '../../../img/statistic.png'
import '../Math.css'


const Statistic = () => {
  return (
    <div className='flex items-stretch border rounded border-solid flex-row relative justify-start py-8 px-0'>
      <div className="">
        <img className='triganImg h-12 ml-8 mr-5 relative' src={stat} alt="" />
      </div>
      <div className="flex m-0 p-0 flex-col relative min-w-0 min-h-0 box-border items-stretch">
        <h2>
          <Link className='text-black' to="">Статистика для средней школы</Link>
        </h2>
        <ul className='ul'>
          <li >
            <Link className='a' to="">Диаграммы рассеяния</Link>
          </li>
          <li>
            <Link className='a' to="">Распределение данных</Link>
          </li>
          <li>
            <Link className='a' to="">Двумерные таблицы</Link>
          </li>
          <li>
            <Link className='a' to="">Методы изучения</Link>
          </li>
          <li>
            <Link className='a' to="">Вероятность</Link>
          </li>
          <li>
            <Link className='a' to="">Биномиальная вероятность</Link>
          </li>
          <li>
            <Link className='a' to="">Нормальное распределение</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Statistic