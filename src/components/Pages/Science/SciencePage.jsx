import React from 'react';
import { Link } from 'react-router-dom'
import '../Math.css';
import Water from './Water';

const SciencePage = () => {
  return (
    <div>
      <div className="math py-8 pr-5 pl-80 text-white flex flex-col box-border">
        <Link className="textA text-base font-normal" to="/science">
          Естественные науки
        </Link>
        <h1 className="">Биология</h1>
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
                  <Link className='li1' to="">Вода, кислоты и основания</Link>
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Макромалекулы</Link> 
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Клеточное дыхание</Link>   
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">ДНК как носитель генетической информации</Link> 
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Биотехнология</Link> 
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Бактерии и археи</Link> 
                </li>
                <li className=' mt-3 mb-4'>
                  <Link className='li1' to="">Вирусы</Link> 
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="py-8">
          <Water />
        </div>
      </div>
    </div>
  );
};

export default SciencePage;
