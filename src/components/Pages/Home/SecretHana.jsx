import React from 'react'
import Secret from './Secret'
import CartBox from '../../UI/Cart/CartBox'
import './Secret.css';
// import img1 from '../img/secret1.svg';
// import img2 from '../img/secret2.svg';

const SecretHana = () => {
  return (
    <div className='secretHana'>
      {/* <img src={img1} alt="" className='windowSecretImg'/>
      <img src={img2} alt="" className='windowSecretImg'/> */}
      <Secret />
      <CartBox />
    </div>
  )
}

export default SecretHana