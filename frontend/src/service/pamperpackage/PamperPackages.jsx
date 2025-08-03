 import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import PamperPackage from '../../components/PamperPackage'
 
 function PamperPackages() {
   return (
      <div>
      <Navbar/>
      <div className="pt-20 min-h-screen ">
    <PamperPackage/>
      </div>       
      <Footer/>

    </div>
   )
 }
 
 export default PamperPackages
 