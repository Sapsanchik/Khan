import React from 'react'
import img from '../../../img/personal.svg';
import './Cart.css';

const Cart1 = () => {
  return (
    <div className='cart flex flex-col justify-items-center text-center items-center'>
      <img src={img} className='cartImg' alt='' />
      <h3 className='cartText font-serif mb-5 leading-7'>
      Персонализированное обучение
      </h3>
      <span className=' font-sans'>
      Каждый ученик занимается в своём собственном темпе, сначала восполняя пробелы в понимании материала, а затем углубляя свои знания.
      </span>
    </div>
  )
}

export default Cart1