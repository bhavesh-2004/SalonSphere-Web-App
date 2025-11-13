import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingConfirmations from '../components/BookingConfirmations'

function BookingConfirmation() {
  return (
    <div>
      <Navbar/>
      <div className="pt-20 min-h-screen ">
        <BookingConfirmations/>
      </div>       
      <Footer/>

    </div>
  )
}

export default BookingConfirmation
