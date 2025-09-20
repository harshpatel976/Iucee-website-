import React from 'react'
import './style.css'
import Section1Mission from '../container/homapage/Section1Mission'
import Section2Aim from '../container/homapage/Section2Aim'
import Section3Faculty from '../container/homapage/Section3Faculty'
import Slider from './Slider'

const Homepage = () => {
  return (
    <>
   <Slider/>
   
    {/* <div className="core-header-container">
      <div className="core-header-overlay">
        <img src="/image/clearbackgroundlogo.png" alt="Anvaya Logo" className="core-header-logo" />
        <h2 className="core-header-subtitle">
          <span className="core-header-red">NIE-IUCEE</span> Student Chapter
        </h2>
      </div>
    </div> */}

    <Section1Mission/>
    <Section2Aim/>
    <Section3Faculty/>
     </>
  )
}

export default Homepage