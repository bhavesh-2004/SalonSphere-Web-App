import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
// import { useState } from 'react';
import { useEffect } from 'react';

// const hairSettings = [
//   {
//     id: 1,
//     title: "Hair Styling – Express",
//     description: "Quick and clean hair setting for any occasion.",
//     includes: [
//       "Light Gel Styling",
//       "Final Touch Spray"
//     ],
//     memberPrice: "₹80",
//     image: "https://img77.uenicdn.com/image/upload/v1520613849/service_images/shutterstock_380386777.jpg"
//   },
//   {
//     id: 2,
//     title: "Hair Styling – Premium",
//     description: "Make a statement with our premium hair setting session.",
//     includes: [
//       "Wax/Gel Styling",
//       "Hair Spray Finish"
//     ],
//     memberPrice: "₹100",
//     image: "https://tse3.mm.bing.net/th/id/OIP.R0w6USAcNfd56aPrUJgwTAHaEo?pid=Api&P=0&h=180"
//   }
// ];

const HairSetting = () => {

const [hairSets, setHairSets] = useState([]);

useEffect(() => {
  const getHairSets = async () => {
    try {
      // const res = await axios.get("http://localhost:4001/hairset");
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/hairset`);

      console.log(res.data);
      setHairSets(res.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  getHairSets();
}, []);


  const [selectedStyle, setSelectedStyle] = useState(null);
  const navigate = useNavigate(); // 🔹 Hook for navigation

  return (
    <div className="p-8 bg-white rounded-xl shadow-md max-w-[1200px] mx-auto dark:bg-slate-900 dark:text-white">
      <h2 className="text-3xl font-semibold text-blue-900 mb-2 dark:text-white">Hair Setting</h2>
      <p className="text-gray-700 mb-6 dark:text-white">
        Choose from our quick or premium hair styling options to perfect your look for any day or event.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {hairSets.map(style => (
          <div
            key={style.id}
            onClick={() => setSelectedStyle(style)}
            className="cursor-pointer border border-blue-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 dark:text-white"
          >
            <img src={style.image} alt={style.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-white">{style.title}</h3>
              <p className="text-gray-600 text-sm mt-1 dark:text-white">{style.description}</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-600 dark:text-white">
                {style.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex justify-end text-sm">
                <div className="text-green-800 font-semibold">
                  Member<br />{style.memberPrice}
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition duration-300">
                BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStyle && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative dark:bg-slate-900 dark:text-white">
            <button
              className="absolute top-2 right-3 text-xl text-red-500"
              onClick={() => setSelectedStyle(null)}
            >
              ×
            </button>
            <img
              src={selectedStyle.image}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt={selectedStyle.title}
            />
            <h3 className="text-xl font-bold text-blue-800 dark:text-white">{selectedStyle.title}</h3>
            <p className="text-gray-700 my-2 dark:text-white">{selectedStyle.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 mb-4 dark:text-white">
              {selectedStyle.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex justify-end mt-2 text-sm">
              <div className="text-green-800 font-semibold">
                Member<br />{selectedStyle.memberPrice}
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedStyle(null);
                navigate('/booknow'); // 🔹 Redirect to booking page
              }}
              className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md"
            >
              CONFIRM BOOKING
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HairSetting;
