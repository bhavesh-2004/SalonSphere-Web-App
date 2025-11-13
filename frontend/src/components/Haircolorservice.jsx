import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
// import { useState } from 'react';
import { useEffect } from 'react';


// const hairColorServices = [
//   {
//     id: 1,
//     title: "Head",
//     description: "Achieve a vibrant, uniform look with our full Head hair colour service, tailored to reflect your style.",
//     // nonMemberPrice: "₹900",
//     memberPrice: "₹100",
//     image: "  https://media.istockphoto.com/id/2209387426/photo/male-hairdresser-dyeing-hair-of-the-female-client-at-the-beauty-salon-hairdresser-applying.jpg?s=612x612&w=0&k=20&c=QOLOt1P0iBT_Hzi0ylYhx3jt5CeAZJtm_mrh_MZxSQA="
//   },
// //   {
// //     id: 2,
// //     title: "Moustache",
// //     description: "Enhance your moustache with a touch of colour, perfect for a subtle or bold change.",
// //     // nonMemberPrice: "₹200",
// //     memberPrice: "₹70",
// //     image: "https://sdmntprwestus3.oaiusercontent.com/files/00000000-c5a4-61fd-ab62-62a666908388/raw?se=2025-07-23T18%3A56%3A42Z&sp=r&sv=2024-08-04&sr=b&scid=57d1cc1d-f529-58ff-a5a6-fa4abd5e4a34&skoid=5c72dd08-68ae-4091-b4e1-40ccec0693ae&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-22T23%3A34%3A41Z&ske=2025-07-23T23%3A34%3A41Z&sks=b&skv=2024-08-04&sig=QsV8pa6ff1gO879HTJKwFV7Vdtm9zHXra4eLjBkVjag%3D"
// //   },
//   {
//     id: 3,
//     title: "Head + Beard + Moustache",
//     description: "Refine your look with our Beard + Moustache colouring service, designed for a cohesive appearance.",
//     // nonMemberPrice: "₹450",
//     memberPrice: "150",
     
//     image: " https://imgs.search.brave.com/rgx9XdFct_Dpr_gsJ45FVWRHhFQ1mgnr5TV3YcUSuoA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBldG9nZW50bGVt/YW4uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzAzL2hh/aXItZHllLW1lbi1z/YWxvbi5qcGc "
//   },
//     {
//     id: 2,
//     title: "Moustache",
//     description: "Enhance your moustache Add a splash of color to your moustache subtle or striking. Perfect for a fresh, personalized look.",
//     // nonMemberPrice: "₹200",
//     memberPrice: "₹70",
//     image: " https://images.deepai.org/art-image/8ed94c00763f418c9bb5be99d2cebe54/moustache-black-coloring-in-salon.jpg "
//   },
// ];

const HairColorServices = () => {

   const [hairColors, setHairColors] = useState([]);

  useEffect(() => {
    const getHairColors = async () => {
      try {
        const res = await axios.get("http://localhost:4001/haircolor");
        console.log(res.data);
        setHairColors(res.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    getHairColors();
  }, []);

  
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="p-8 bg-white rounded-xl shadow-md max-w-[1200px] mx-auto  dark:bg-slate-900 dark:text-white">
      <h2 className="text-3xl font-semibold text-blue-900 mb-2  dark:bg-slate-900 dark:text-white ">Hair Colour</h2>
      <p className="text-gray-700 mb-6  dark:bg-slate-900 dark:text-white">
        Transform your look with SalonSphere Hair Colour Services, offering a spectrum of shades to perfectly match your style and personality. Whether you’re looking to make a bold statement or subtly enhance your natural hue, our expert stylists are here to guide you through every step of the process.
      </p>

      <div className="grid md:grid-cols-3 gap-6 ">
        {hairColors.map(service => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="cursor-pointer border border-blue-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out bg-white  dark:bg-slate-900 dark:text-white"
          >
            <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-900  dark:bg-slate-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-1  dark:bg-slate-900 dark:text-white">{service.description}</p>
              <div className="mt-4 flex justify-between text-sm">
                <div className="text-orange-600 font-semibold">
                  {/* Non-Member<br />{service.nonMemberPrice} */}
                </div>
                <div className="flex justify-end text-sm font-semibold mb-4">
                  <div className="text-green-800 font-semibold ">
                  Price<br />{service.memberPrice}
                </div>
              </div>
              </div>
              <button className="mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition duration-300">
                BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Modal or detail view */}
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

export default HairColorServices;
