import React from 'react';
import '../../../Style.css';
import Button from '../../UI/Buttons/Button';

const Result = () => {
  return (
    <div className="windowResult px-5 pt-40">
      <div className="grid grid-cols-2 ">
        <div className="bg-gray-500">
          1
        </div>
        <div className="">
          <h1 className='windowResultText font-serif font-medium leading-none'>
            Для каждого ученика,<br/>
            независимо от возраста.<br/>
            Реальные результаты!
          </h1>
          <hr className='windowResultHr'/>
          <p className='text-lg mt-9 mb-8 font-sans tracking-wide'>
          Миссия нашей некоммерческой организации – предоставить повсеместный доступ к бесплатному образованию мирового класса
          </p>
          <Button>Учащиеся</Button>
          <Button>Учителя</Button>
          <Button>Родители</Button>
        </div>
      </div>
    </div>
  );
};

export default Result;
