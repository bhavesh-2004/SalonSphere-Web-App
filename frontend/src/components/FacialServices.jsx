import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
// import { useState } from 'react';
import { useEffect } from 'react';


// const facialServices = [
//   {
//     id: 1,
//     title: "O3 Facial",
//     description:
//       "Elevate your skincare with SalonSphere Men's Salon's O3 Facial-detoxifying, nourishing, and rejuvenating for flawless skin.",
//     memberPrice: "₹300",
//     image:
//       " https://imgs.search.brave.com/RkaRvLa8ZptPiDg2iefcVZG16nugTEIMa3aJfcqUW78/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlc2hhLmNv/bS9sZWFkLWltYWdl/cy9wbGFjZWhvbGRl/cnMvYmVhdXR5LXNh/bG9uLTIuanBnP2Ns/YXNzPXdpZHRoLXNt/YWxs",
//   },
//   {
//     id: 2,
//     title: "Gold Facial",
//     description:
//       "Discover luxury with  SalonSphere Gold Facial, blending gold's anti-aging magic with deep nourishment for your skin.",
//     memberPrice: "₹500",
//     image:
//       "https://images.deepai.org/art-image/aa3fc7a79d1b48499967a5862ab58da9/the-complete-facial-guide-for-men-its-gold-facial-in-.jpg",
//   },
//   {
//     id: 3,
//     title: "Multani Mati",
//     description:
//       "Multani Mati( Fuller's Earth) Designed specifically for men, the Multani Mati Facial addresses the challenges of male skin.",
//     memberPrice: "₹150",
//     image:
//       "  https://images.deepai.org/art-image/067a644423114353b849d8577005b397/a-high-resolution-photograph-of-a-professional-male-s.jpg ",
//   },
// ];

const FacialServices = () => {

const [facialServices, setFacialServices] = useState([]);

useEffect(() => {
  const getFacialServices = async () => {
    try {
      // const res = await axios.get("http://localhost:4001/facial");
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/facial`);

      console.log(res.data);
      setFacialServices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  getFacialServices();
}, []);



    const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = (service) => {
    setSelectedService(service);
  };

  const handleConfirmBooking = () => {
    alert(`✅ Booking Confirmed for ${selectedService.title}!`);
    setSelectedService(null); // close modal after confirmation
  };

  return (
    <div className="p-6 md:p-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-2  dark:bg-slate-900 dark:text-white">Facials</h1>
      <p className="text-gray-700 text-lg mb-8  dark:bg-slate-900 dark:text-white">
        Elevate your grooming experience with SalonSphere specialized Facial
        Services, designed to cater to the unique skincare needs of men.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {facialServices.map((service) => (
          <div
            key={service.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 bg-white  dark:bg-slate-900 dark:text-white"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-blue-900 mb-2  dark:bg-slate-900 dark:text-white">
                {service.title}
              </h2>
              <p className="text-gray-700 text-sm mb-4  dark:bg-slate-900 dark:text-white">{service.description}</p>
              <div className="flex justify-end text-sm font-semibold mb-4">
                  <div className="text-green-800 font-semibold ">
                  Price<br />{service.memberPrice}
                </div>
              </div>
              <button
                onClick={() => handleBookNow(service)}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Confirm Booking Modal */}
      {selectedService && (
     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative  dark:bg-slate-900 dark:text-white">
            <button
              className="absolute top-2 right-3 text-xl text-red-500"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>
            <img src={selectedService.image} className="w-full h-48 object-cover rounded-lg mb-4" alt={selectedService.title} />
            <h3 className="text-xl font-bold text-blue-800  dark:bg-slate-900 dark:text-white">{selectedService.title}</h3>
            <p className="text-gray-700 my-2  dark:bg-slate-900 dark:text-white">{selectedService.description}</p>
            <div className="flex justify-between mt-4 text-sm">
              <div className="text-orange-600 font-semibold">
                {/* Non-Member<br />{selectedService.nonMemberPrice} */}
              </div>
              <div className="text-green-800 font-semibold">
                Price<br />{selectedService.memberPrice}
              </div>
            </div>
          <button
            onClick={() => {
              setSelectedService(null);
              navigate('/booknow'); // Navigate to BookAppointments page
            }}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded"
          >
            Confirm Booking
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacialServices;
