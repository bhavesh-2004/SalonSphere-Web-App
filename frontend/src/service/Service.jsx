import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'
// import list from "../../public/list.json"
// import list from '../../public/list.json'


function Service() {
  //  console.log(list.json);
  
  return (
    <div>
      <Navbar/>
      <div className="pt-20 min-h-screen ">
    <Services/>
      </div>       
      <Footer/>

    </div>
  )
}

export default Service
