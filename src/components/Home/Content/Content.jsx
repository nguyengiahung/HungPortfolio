import React from 'react'
import './Content.scss'
import handicon from '../../../assets/imgs/hand.png'

function Content() {
  return (
    <div className='home__content'>
        <h1 className='home__title'>Hung Nguyen</h1>
        <p className='home__subtitle'>FrontEnd Developer</p>
        <p className='home__desc'>Hi, I'm Hung Nguyen, A passionate Front-End React Developer based in Da Nang, Viet Nam.</p>
        <button className="button home__btn">
          <span>Say Hi</span> 
          <img src={handicon} alt="" />
          </button>
    </div>
  )
}

export default Content