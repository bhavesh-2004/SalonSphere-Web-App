import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Basichaircut from '../../components/Basichaircut'

function Basichaircuts() {
  return (
    <div>
       <Navbar/>
      <div className="pt-20 min-h-screen ">
      <Basichaircut/>
      </div>       
      <Footer/>
    </div>
  )
}

export default Basichaircuts
