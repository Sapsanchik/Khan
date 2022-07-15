import React from 'react'
import img from '../../../img/material.svg';
import './Cart.css';

const Cart2 = () => {
  return (
    <div className='cart flex flex-col justify-items-center text-center items-center'>
      <img src={img} className='cartImg' alt='' />
      <h3 className='cartText font-serif mb-5 leading-7'>
      Проверенные материалы
      </h3>
      <span className=' font-sans'>
      Библиотека Академии Хана состоит из созданных экспертами уроков по математике, естественным наукам, истории и другим предметам. Все они бесплатны для учащихся и учителей.
      </span>
    </div>
  )
}

export default Cart2