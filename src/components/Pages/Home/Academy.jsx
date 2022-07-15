import React from 'react';
import Button from '../../UI/Buttons/Button';
import './Secret.css';

const Academy = () => {
  return (
    <div className="windowAcademy px-16">
      <h2 className="windowAcademyText font-serif font-medium text-center mx-28">
        Присоединяйтесь к Академии Хана уже сегодня
      </h2>
      <div className="Btn flex flex-col gap-2 w-72">
        <Button>Учащиеся</Button>
        <Button>Учителя</Button>
        <Button>Родители</Button>
        <Button>Внести пожертвование</Button>
      </div>
    </div>
  );
};

export default Academy;
