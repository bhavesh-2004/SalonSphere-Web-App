import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom";
 

function Services() {
const [service, setServices] = useState([]);

useEffect(() => {
  const getServices = async () => {
    try {
      const res = await axios.get("http://localhost:4001/service"); // Make sure the endpoint matches your backend
      console.log(res.data);
      setServices(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  getServices();
}, []);

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white '>
      <div className="bg-white text-black p-4  dark:bg-slate-900 dark:text-black ">
<h2 className="text-2xl font-bold text-center  dark:bg-slate-900 dark:text-white ">
   MEN'S SALON <span className="text-yellow-700 font-semibold  dark:bg-slate-900 dark:text-white">SERVICES</span>
</h2>
        <p className="text-base text-gray-800 leading-relaxed text-center mb-10  dark:bg-slate-900 dark:text-white">
          Experience premium grooming from stylish haircuts to classic shaves, beard trims, and complete grooming all with personalized care tailored just for you.
        </p>

        <div className="grid md:grid-cols-3 gap-6  ">
          {service.map((service, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group  dark:bg-slate-900 dark:text-black border" 
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover "
              />
              <div className="p-4 bg-white  dark:bg-slate-900 dark:text-white ">
                <h4 className="text-xl font-semibold text-center mb-4 group-hover:text-yellow-600 transition-colors duration-300 ">
                  {service.title}
                </h4>
          <Link
          to={service.link}
          className="block text-center bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300   "
        >
          EXPLORE SERVICES
        </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
