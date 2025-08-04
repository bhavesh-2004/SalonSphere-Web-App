 import React from 'react'
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import list from "../../public/list.json"
import Cards from './Cards';
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';


function Haircut() {


  const [salon, setSalon] = useState([])
  useEffect(() =>{
    const getSalon=async() =>{
      try {
      // const res =  await axios.get("http://localhost:4001/salon");
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/salon`);

        console.log(res.data);
        setSalon(res.data)
        
    } catch (error) {
        console.log(error);
        
      }
    }
    getSalon();
  },[]);


  const filterData = salon.filter((data) => data.price === 150);
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-5 bg-white  dark:bg-slate-900 dark:text-white">
    <div>
        <h1 className="font-semibold text-3xl pb-2 text-black  dark:bg-slate-900 dark:text-white">Your Hair Is Our Craft</h1>
      <p className="text-gray-600 max-w-xl  dark:bg-slate-900 dark:text-white">
        From hair coloring to blow-minding haircuts, our salon offers its clients unique experience in a warm and welcoming atmosphere.
      </p>
    </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* {filterData.map((item) => (
          <div key={item.id} className="bg-gray-100 rounded-xl shadow-md p-4">
            {/* <img src={item.image} alt={item.name} className="h-48 w-full object-cover rounded-md" /> */}
            {/* <a href={item.image} target="_blank" rel="noopener noreferrer">
  <img 
    src={item.image} 
    alt={item.name} 
    className="w-full h-auto object-contain rounded-md max-h-60 hover:scale-105 transition-transform duration-300"
  />
</a> */}
            {/* <h2 className="text-lg font-bold mt-2">{item.name}</h2>
            <p className="text-gray-600">{item.title}</p>
            <p className="text-indigo-600 font-semibold mt-1">₹{item.price}</p>
          </div> */}
      {/* </div>} */}

      <div >
         <Slider {...settings}>
        {filterData.map((item)  => (
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default Haircut;
