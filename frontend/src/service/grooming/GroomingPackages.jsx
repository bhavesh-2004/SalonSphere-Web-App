import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GroomingPackage from '../../components/GroomingPackage'

function GroomingPackages() {
  return (
     <div>
      <Navbar/>
      <div className="pt-20 min-h-screen ">
    <GroomingPackage/>
      </div>       
      <Footer/>

    </div>
  )
}

export default GroomingPackages
