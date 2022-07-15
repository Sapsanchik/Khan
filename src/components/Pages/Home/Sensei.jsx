import React from 'react';
import Button from '../../UI/Buttons/Button';
import '../../../Style.css';

const Sensei = () => {
  return (
    <div className="windowSensei px-5 pt-40">
      <div className="grid grid-cols-12 gap-2">
        <div className="bg-gray-500 col-start-1 col-span-7">1</div>
        <div className="col-start-8 col-span-5">
          <span className='windowSenseiText font-sans text-sm'>УЧИТЕЛЯ</span>
          <h2 className="windowSenseiTextH2 font-serif font-medium leading-none text-5xl mt-7">
            Распределите задание так, чтобы занять каждого ученика.
          </h2>
          <p className="text-lg mt-7 mb-10 font-sans tracking-wide">
            Наши технологии позволяют учителям организовать учебный процесс для
            всего класса. 90% американских учителей, которые использовали
            Академию Хана, остались довольны эффективностью нашей программы.
          </p>
          <Button>Вход для учителей</Button>
        </div>
      </div>
    </div>
  );
};

export default Sensei;
