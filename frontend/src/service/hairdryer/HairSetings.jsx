import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HairSetting from '../../components/HairSetting'

function HairSetings() {
  return (
    <div>
       <Navbar/>
      <div className="pt-20 min-h-screen ">
    <HairSetting/>
      </div>       
      <Footer/>
    </div>
  )
}

export default HairSetings
