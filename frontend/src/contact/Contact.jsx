import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contacts from '../components/Contacts'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className="pt-20 min-h-screen ">
    <Contacts/>
      </div>       
      <Footer/>

    </div>
  )
}

export default Contact
