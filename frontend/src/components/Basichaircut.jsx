import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
// import { useState } from 'react';
import { useEffect } from 'react';



// const services = [
 
//     {
//     id: 1,
//     title: "Hair Cut + Wash",
//     description: "Look sharp and feel clean with our combined stylish haircut and refreshing wash.",
//     memberPrice: "₹160",
//     image: "https://imgs.search.brave.com/cMr3CD6hVEka-8SDQ2PfERYDWKc9QW-jtT9vjtTTXoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbGFzc2ljLWhh/aXJjdXQtYmFyYmVy/c2hvcC1jdXJ2ZS1o/YWlyLXN0eWxpbmct/aGFpci1oZWFsdGgt/Y2FyZS1iYXJiZXJz/aG9wLW1lbi1zXzIx/NzMzMy0zNzguanBn/P3NlbXQ9YWlzX2l0/ZW1zX2Jvb3N0ZWQm/dz03NDA", // update with your image path
//   },
//   {
//     id: 2,
//     title: "Kids Hair Cut",
//     description: "Enjoyable and gentle haircuts for kids under 5, ensuring a memorable, fuss-free salon visit.",
//     // nonMemberPrice: "₹200",
//     memberPrice: "₹100",
//     image: "https://media.istockphoto.com/id/680907176/photo/little-boy-getting-haircut-by-barber-while-sitting-in-chair-at-barbershop.jpg?s=612x612&w=0&k=20&c=pjQ1u-clewaVhuVzJfguXE29upc0-dg79bY4XCpR8t4=",
//   },
//   {
//     id: 3,
//     title: "Head Shave",
//     description: "Opt for a sleek look with our comfortable, thorough Head Shave, perfect for a bold change.",
//     // nonMemberPrice: "₹100",
//     memberPrice: "₹100",
//     image: "https://imgs.search.brave.com/KL_qcBmj7wVXJ4ytXwb8y1nRmNdbfvBRyljKmtOoQGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzQ3LzI0LzIw/LzM2MF9GXzQ0NzI0/MjAyNl9sQjI4VmlN/M3k5SnhVQTI2NUtu/Rktsc3BLaEJ1U1JP/Wi5qcGc",
//   },

//   {
//   id: 4,
//   title: "Beard & Moustache Trim",
//   description: "Shape your beard and moustache with precision for a clean, defined, and stylish look.",
//   // nonMemberPrice: "₹180",
//   memberPrice: "₹100",
//   image: " https://imgs.search.brave.com/ORn8g1QWxzHEkxyUoL5xQ7bciuPi7qt_JA5sqicdVTA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9od3loODEy/enNqODAvMnFGWDBy/bWoxZWk2UjNBakRk/eHhwZy80NGMyYTRi/OWMwNjgwNTg5MzM3/Y2ViMDYwZTM0NmFh/MS9UaGUtYmVzdC1i/YXJiZXJzLWluLUNh/bWJlcndlbGxfXzFf/LmpwZw",
// },

// {
//   id: 5,
//   title: "Clean Shave",
//   description: "Get the ultimate smooth finish with our clean and refreshing shaving experience.",
//   // nonMemberPrice: "₹100",
//   memberPrice: "₹80",
//   image: " https://imgs.search.brave.com/ZMGDVrrivWAoLBEja7pPPHG3ju7AwG5g2W0QMvGBp6k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9vcGVu/dGV4dGJjLmNhL2Fj/Y2Vzc2liaWxpdHl0/b29sa2l0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zaXRlcy8zMzUv/MjAyMS8wMy9JTUdf/MDI4Ny5wbmc",
// }
// ,
//  {
//   id: 6,
//   title: "Face Wash",
//   description: "Deep cleanse your skin and remove impurities with our refreshing face wash treatment.",
//   // nonMemberPrice: "₹100",
//    memberPrice: "₹80",
//   image: "https://images.deepai.org/art-image/234f29da6bb34fd7aca98b11fa0bcaac/face-washing-by-barber-in-salon-thumb.jpg",
// }

// ];

const HairServices = () => {

  const [basicCuts, setBasicCuts] = useState([]);

useEffect(() => {
  const getBasicCuts = async () => {
    try {
      // const res = await axios.get("http://localhost:4001/basic");
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/basic`);

      console.log(res.data);
      setBasicCuts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  getBasicCuts();
}, []);


  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState(null);




  return (
    <div className="p-6 max-w-screen-xl mx-auto  dark:bg-slate-900 dark:text-white">
       <h1 className="text-3xl font-bold text-blue-800 mb-2  dark:bg-slate-900 dark:text-white">The Basic Haircuts</h1>
      <h2 className="text-xl font-medium text-center mb-4">
        At SalonSphere, we understand that sometimes, simplicity is the ultimate sophistication.
      </h2>
      <div className="grid md:grid-cols-3 gap-6 ">
        {basicCuts.map((service) => (
          <div
  key={service.id}
  onClick={() => setSelectedService(service)}
  className="cursor-pointer border-2 border-blue-200 rounded-xl overflow-hidden shadow-md bg-white transform transition duration-300 ease-in-out hover:shadow-xl hover:scale-105  dark:bg-slate-900 dark:text-white"
>

            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4 ">
              <h3 className="text-lg font-semibold text-blue-900 mb-1  dark:bg-slate-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-700 text-sm  dark:bg-slate-900 dark:text-white">{service.description}</p>
              <div className="flex justify-between mt-4 text-sm">
                {/* <span className="text-orange-500 font-semibold">
                  Non-Member<br />{service.nonMemberPrice}
                </span> */}
                <span className="text-green-600 font-semibold   ">
                  Price<br />{service. memberPrice}
                </span>
              </div>
              <button className="block w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md transition">
                BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal or Detail View */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl relative  dark:bg-slate-900 dark:text-white">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <img src={selectedService.image} alt={selectedService.title} className="w-full rounded mb-4" />
            <h3 className="text-xl font-bold text-blue-800 mb-2  dark:bg-slate-900 dark:text-white">{selectedService.title}</h3>
            <p className="text-gray-600 mb-3  dark:bg-slate-900 dark:text-white">{selectedService.description}</p>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-orange-600 font-medium">
                {/* Non-Member: {selectedService.nonMemberPrice} */}
              </span>
              <span className="text-green-600 font-medium ">
                Price: {selectedService.memberPrice}
              </span>
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

export default HairServices;
