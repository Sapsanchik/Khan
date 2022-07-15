import React from 'react';
import Button from '../../UI/Buttons/Button';
import '../../../Style.css';

const Student = () => {
  return (
    <div className="windowStudent px-5 pt-40">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-start-1 col-span-5">
          <span className="windowStudentText font-sans text-sm">
            УЧЕНИКИ И СТУДЕНТЫ
          </span>
          <h2 className="windowStudentTextH2 font-serif font-medium leading-none text-5xl mt-7">
            Вы можете научиться всему.
          </h2>
          <p className="text-lg mt-7 mb-10 font-sans tracking-wide">
            Научитесь хорошо разбираться в математике, естественных науках и
            других предметах.
          </p>
          <Button>Обучение начинается здесь</Button>
        </div>
        <div className="bg-gray-500 col-start-6 col-span-7">1</div>
      </div>
    </div>
  );
};

export default Student;
