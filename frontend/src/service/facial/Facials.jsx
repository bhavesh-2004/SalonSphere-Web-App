import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FacialServices from '../../components/FacialServices'
 
 

function Facials() {
  return (
     <div>
      <Navbar/>
      <div className="pt-20 min-h-screen ">
     <FacialServices/>
      </div>       
      <Footer/>

    </div>
  )
}

export default Facials
