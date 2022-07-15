import React from 'react';
import '../../../Style.css';
import img from '../../../img/v1-anjali-2x.png';

const Anjali = () => {
  return (
    <div className="windowAnjali flex w-screen ml-auto mr-auto flex-col">
      <span className="windowAnjaliText font-serif pb-6">
        «Я из бедной семьи. Дома мы живем в одной комнате. Когда я была
        ребенком, я боялась математики. Но теперь я полюбила математику
        благодаря проекту Академии Хана»
      </span>
      <div className="grid grid-cols-6">
        <div className="grid grid-row-2 col-start-5">
          <span className="flex justify-end items-end pr-10 font-medium">АНЖАЛИ</span>
          <span className="flex justify-end pr-10 text-sm">Индия</span>
        </div>
        <img src={img} alt="" className="col-start-6" />
      </div>
    </div>
  );
};

export default Anjali;
