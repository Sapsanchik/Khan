import React from 'react'
import img from '../../../img/instrument.svg';
import './Cart.css';

const Cart3 = () => {
  return (
    <div className='cart flex flex-col justify-items-center text-center items-center'>
      <img src={img} className='cartImg' alt='' />
      <h3 className='cartText font-serif mb-5 leading-7'>
      Инструменты для расширения возможностей учителей
      </h3>
      <span className=' font-sans'>
      Академия Хана поможет учителям выявить пробелы в знаниях учеников и составить индивидуальный план для каждого учащегося.
      </span>
    </div>
  )
}

export default Cart3