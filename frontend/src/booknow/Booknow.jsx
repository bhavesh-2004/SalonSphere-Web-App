import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookAppointments from '../components/BookAppointments';

function Booknow() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center px-4">
       <h2 className="text-center text-xl font-semibold mb-6">
  <span className="text-gray-800 dark:text-white">
    Welcome to <span className="text-orange-500">SalonSphere</span>! Kindly complete the <span className="text-green-600 font-semibold">Book Appointment</span> form and share your details to schedule your visit with us.
  </span>
</h2>
        <BookAppointments />
      </div>
      <Footer />
    </div>
  );
}

export default Booknow;
