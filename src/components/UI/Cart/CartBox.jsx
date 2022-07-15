import React from 'react'
import Cart1 from './Cart1'
import Cart2 from './Cart2'
import Cart3 from './Cart3'

const CartBox = () => {
  return (
    <div className='flex flex-row gap-14 justify-center'>
      <Cart1 />
      <Cart2 />
      <Cart3 />
    </div>
  )
}

export default CartBox