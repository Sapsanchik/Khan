import React from 'react'
import '../../../Style.css';
import logo1 from '../../../img/bank-of-america-gray@2x.png';
import logo2 from '../../../img/college-board-gray@2x.png';
import logo3 from '../../../img/ann-and-john-doerr-gray@2x.png';
import logo4 from '../../../img/gates-foundation-gray@2x.png';
import logo5 from '../../../img/lemann-foundation-gray@2x.png';
import logo6 from '../../../img/carlos-rodriguez-pastor-gray@2x.png';
import logo7 from '../../../img/tata-trusts-gray@2x.png';
import logo8 from '../../../img/valhalla-gray@2x.png';
import logo10 from '../../../img/att-gray@2x.png';
import logo11 from '../../../img/college-board-gray@2x.png';
import logo12 from '../../../img/novartis-gray@2x.png';
import logo13 from '../../../img/fastly-gray@2x.png';
import logo14 from '../../../img/gm-gray@2x.png';
import logo15 from '../../../img/adobe-gray@2x.png';

const Partner = () => {
  return (
    <div className='partner flex flex-col w-screen items-center'>
      <h2 className='text-4xl font-serif font-medium'>Ключевые партнёры</h2>
      <div className="partnerImg flex flex-wrap pt-16 justify-center items-center">
        <img className='partnerImg1' src={logo1} alt="" />
        <img className='partnerImg2' src={logo2} alt="" />
        <img className='partnerImg3' src={logo3} alt="" />
        <img className='partnerImg4' src={logo4} alt="" />
        <img className='partnerImg5' src={logo5} alt="" />
        <img className='partnerImg6' src={logo6} alt="" />
        <img className='partnerImg7' src={logo7} alt="" />
        <img className='partnerImg8' src={logo8} alt="" />
      </div>
      <hr className='partnerHr block p-0 w-screen border-0' />
      <h2 className='text-4xl font-serif font-medium'>Те, кто поддерживают наши усилия в условиях COVID-19</h2>
      <div className="partnerImg flex flex-wrap pt-16 justify-center items-center">
        <img className='partnerImg1' src={logo1} alt="" />
        <img className='partnerImg10' src={logo10} alt="" />
        <img className='partnerImg11' src={logo11} alt="" />
        <img className='partnerImg12' src={logo12} alt="" />
        <img className='partnerImg13' src={logo13} alt="" />
        <img className='partnerImg14' src={logo14} alt="" />
        <img className='partnerImg15' src={logo15} alt="" />
      </div>
    </div>
  )
}

export default Partner