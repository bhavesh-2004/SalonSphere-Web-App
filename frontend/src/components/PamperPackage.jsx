import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
// import { useState } from 'react';
import { useEffect } from 'react';

// const pamperPackages = [
//   {
//     id: 1,
//     title: "Pamper Package – Basic",
//     description: "A refreshing package to uplift your style and spirit.",
//     includes: ["Basic Haircut", "Beard Trim", "Head Massage", "Relax"],
//     memberPrice: "₹300",
//     image: "https://media.istockphoto.com/id/506514230/photo/beard-grooming.jpg?s=612x612&w=0&k=20&c=QDwo1L8-f3gu7mcHf00Az84fVU8oNpQLgvUw6eGPEkc="
//   },
//   {
//     id: 2,
//     title: "Pamper Package – Premium",
//     description: "A full grooming experience to feel your best.",
//     includes: ["Haircut + Styling", "Hair Color (Head)", "Beard & Moustache Color", "Facial Cleanup"],
//     memberPrice: "₹400",
//     image: "https://cdn.pixabay.com/photo/2020/05/27/01/05/barber-shop-5225273_1280.jpg"
//   }
// ];

const PamperPackage = () => {

  const [pamperPackages, setPamperPackages] = useState([]);

useEffect(() => {
  const getPamperPackages = async () => {
    try {
      const res = await axios.get("http://localhost:4001/pamper");
      console.log(res.data);
      setPamperPackages(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  getPamperPackages();
}, []);


  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="p-8 bg-white rounded-xl shadow-md max-w-[1200px] mx-auto dark:bg-slate-900 dark:text-white">
      <h2 className="text-3xl font-semibold text-blue-900 mb-2 dark:text-white">Pamper Packages</h2>
      <p className="text-gray-700 mb-6 dark:text-white">
        Treat yourself to our thoughtfully curated Pamper Packages, each offering a perfect blend of essential grooming services at excellent value designed to refresh your look, relax your mind, and recharge your spirit.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {pamperPackages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => setSelectedPackage(pkg)}
            className="cursor-pointer border border-blue-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 dark:text-white"
          >
            <img src={pkg.image} alt={pkg.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-white">{pkg.title}</h3>
              <p className="text-gray-600 text-sm mt-1 dark:text-white">{pkg.description}</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-600 dark:text-white">
                {pkg.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex justify-end text-sm">
                <div className="text-green-800 font-semibold">
                  Price<br />{pkg.memberPrice}
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
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative dark:bg-slate-900 dark:text-white">
            <button
              className="absolute top-2 right-3 text-xl text-red-500"
              onClick={() => setSelectedPackage(null)}
            >
              ×
            </button>
            <img src={selectedPackage.image} className="w-full h-48 object-cover rounded-lg mb-4" alt={selectedPackage.title} />
            <h3 className="text-xl font-bold text-blue-800 dark:text-white">{selectedPackage.title}</h3>
            <p className="text-gray-700 my-2 dark:text-white">{selectedPackage.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 mb-4 dark:text-white">
              {selectedPackage.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex justify-end mt-2 text-sm">
              <div className="text-green-800 font-semibold">
                {selectedPackage.memberPrice}
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedPackage(null); // Corrected
                navigate('/booknow');     // Navigation works
              }}
              className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PamperPackage;
