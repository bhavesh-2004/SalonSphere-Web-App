import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingConfirmations = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          'radial-gradient(circle at center, rgba(255,255,255,0.9) 10%, transparent 11%), radial-gradient(circle at center, #d9d9d9 10%, #fef6ed 11%)',
        backgroundSize: '4rem 4rem',
      }}
    >
      <h1 className="text-3xl md:text-4xl font-medium text-indigo-600 mb-4">
        Thanks for choosing SalonSphere!
      </h1>

      <p className="text-gray-700 mb-2 max-w-xl">
        Your appointment is confirmed.Your appointment details have been successfully saved.
         {/* We've sent the salon directions to your WhatsApp. */}
        See you at your scheduled time.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-8 text-pink-600">
        Stay sharp, stay stylish!
      </h2>

      <button
        onClick={() => navigate('/')}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md transition"
      >
        BACK TO HOME
      </button>
    </div>
  );
};

export default BookingConfirmations;
