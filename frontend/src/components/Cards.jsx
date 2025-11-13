import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Cards({ item }) {
  // Renders stars based on rating value
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <>
      <div className="card bg-white w-96 shadow-2xl mt-8 hover:bg-gray-100 active:bg-gray-100 transition ease-in-out duration-300  dark:bg-slate-900 dark:text-white border">
        <figure>
          <img
            src={item.image}
            alt="haircut"
            className="w-full h-64 object-contain p-2 rounded-3xl "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            {/* <div className="badge badge-secondary">{item.price}rs</div> */}
          </h2>
          {/* <p>{item.title}</p> */}
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{item.category}</div>
            <div className="flex items-center gap-1">
              {renderStars(item.rating)}
              <span className="text-sm text-gray-600">({item.rating})</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
