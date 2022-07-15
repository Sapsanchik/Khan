import React from 'react';
import Button from '../../UI/Buttons/Button';
import '../../../Style.css';

const Children = () => {
  return (
    <div className="windowChildren px-5 pt-40">
      <div className="grid grid-cols-12 gap-2">
        <div className="bg-gray-500 col-start-1 col-span-7">1</div>
        <div className="col-start-8 col-span-5">
          <span className="windowChildrenText font-sans text-sm">
            ВМЕСТЕ МЫ МОЖЕМ МНОГОЕ ИЗМЕНИТЬ
          </span>
          <h2 className="windowChildrenTextH2 font-serif font-medium leading-none mt-7">
            Каждый ребенок заслуживает шанс учиться.
          </h2>
          <p className="text-lg mt-7 mb-10 font-sans tracking-wide">
            На Земле 617 миллионов детей не знают основ счёта и письма. Мы можем
            изменить жизни этих детей.
          </p>
          <Button>Дайте им шанс</Button>
        </div>
      </div>
    </div>
  );
};

export default Children;
