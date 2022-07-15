import React from 'react';
import { Link } from 'react-router-dom'
import '../Math.css';
import Stav from './Stav';

const FinancePage = () => {
  return (
    <div>
      <div className="math py-8 pr-5 pl-80 text-white flex flex-col box-border">
        <Link className="textA text-base font-normal" to="/economic">
          Экономика и финансы
        </Link>
        <h1 className="">Финансовые рынки и рынки капиталов</h1>
      </div>
      <div className="material m-auto flex items-stretch relative flex-row box-border">
        <div className="">
          <div className="flex flex-col w-80 items-stretch relative">
            <nav className="py-8 ">
              <ul className='w-60 block font-sans'>
                <li className='li1'>
                  <h2 className='h21'>
                    Обобщение курса
                  </h2>
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Займы и процентные ставки</Link>
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Жильё</Link> 
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Инфляция</Link>   
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Налоги</Link> 
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Бухгалтерская и финансовая отчетность</Link> 
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Акции и облигации</Link> 
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Инвестионные инструменты, страхование и пенсионные накопления</Link> 
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Деньги, банковское дело и центральные банки</Link> 
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Опционы, свопы, фьючерсы, ИЦБ, ОДО и другие деривативы</Link> 
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Современная экономика</Link> 
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="py-8">
          <Stav />
        </div>
      </div>
    </div>
  );
};

export default FinancePage;
