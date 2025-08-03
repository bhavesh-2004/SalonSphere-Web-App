// import React from 'react';
 

// function BookAppointment() {
//   const openModal = () => {
//     const modal = document.getElementById('appointment_modal');
//     if (modal) modal.showModal();
//   };

//   return (
//     <div>
//       {/* Trigger Button */}
//       <button
//         onClick={openModal}
//          className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-amber-700 duration-300 cursor-pointer  dark:bg-slate-900 dark:text-white "
//       >
//         Book Appointment
//       </button>

//       {/* Modal */}
//       <dialog id="appointment_modal" className="modal">
//         <div className="modal-box bg-white text-black dark:bg-gray-900 dark:text-white">
//           <form method="dialog">
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//           </form>

//           <h3 className="font-bold text-xl mb-4 text-center">Book Appointment</h3>

//           {/* Appointment Date */}
//           <div className="mb-3 ">
//             <label className="block text-sm font-medium mb-1">Appointment Date:</label>
//             <input
//               type="date"
//               className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
//             />
//           </div>

//           {/* Time Selection */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Select Appointment Time:</label>
//             <input
//               type="time"
//               className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
//             />
//           </div>

//           {/* Full Name */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Full Name:</label>
//             <input
//               type="text"
//               placeholder="Your Full Name"
//               className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
//             />
//           </div>

//           {/* Preferred Offer */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Preferred Offer:</label>
//             <select className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white">
//               <option>Select an offer</option>
//               <option>Haircut</option>
//               <option>Facial</option>
//               <option>Beard Trim</option>
//             </select>
//           </div>

//           {/* Phone Number */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Phone:</label>
//             <div className="flex">
//               <span className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-l-md border border-r-0 dark:border-gray-600">+91</span>
//               <input
//                 type="tel"
//                 maxLength="10"
//                 placeholder="10 digits phone number"
//                 className="w-full px-3 py-2 border rounded-r-md bg-white dark:bg-gray-800 text-black dark:text-white"
//               />
//             </div>
//           </div>

//           {/* Pincode */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Area Pincode:</label>
//             <input
//               type="text"
//               placeholder="Enter Pincode"
//               className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
//             />
//           </div>

//           {/* Submit */}
//           <div className="text-center">
//             <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
//               Confirm Booking
//             </button>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default BookAppointment;








//BookAppointment.jsx
// import React, { useRef } from 'react';

// function BookAppointment() {
//   const modalRef = useRef(null);

//   const openModal = () => {
//     if (modalRef.current) {
//       modalRef.current.showModal();
//     }
//   };

//   return (
//     <div>
//       {/* Trigger Button */}
//     <button
//   onClick={openModal}
//   className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-amber-700 duration-300 cursor-pointer 
//              dark:bg-[#8B4513] dark:hover:bg-[#3a8356]"
// >
//   Book Appointment
// </button>


//       {/* Modal */}
//       <dialog ref={modalRef} id="appointment_modal" className="modal">
//         <div className="modal-box bg-white text-black dark:bg-gray-900 dark:text-white">
//           <form method="dialog">
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//           </form>

//           <h3 className="font-bold text-xl mb-4 text-center">Book Appointment</h3>

//           {/* Appointment Date */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Appointment Date:</label>
//             <input
//               type="date"
//               className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
//             />
//           </div>

//           {/* Time Selection */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Select Appointment Time:</label>
//             <input
//               type="time"
//               className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
//             />
//           </div>

//           {/* Full Name */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Full Name:</label>
//             <input
//               type="text"
//               placeholder="Your Full Name"
//               className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
//             />
//           </div>

//           {/* Preferred Offer */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Preferred Offer:</label>
//             <select className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white">
//               <option>Select an offer</option>
//               <option>Haircut</option>
//               <option>Facial</option>
//               <option>Beard Trim</option>
//             </select>
//           </div>

//           {/* Phone Number */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Phone:</label>
//             <div className="flex">
//               <span className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-l-md border border-r-0 dark:border-gray-600">+91</span>
//               <input
//                 type="tel"
//                 maxLength="10"
//                 placeholder="10 digits phone number"
//                 className="w-full px-3 py-2 border rounded-r-md bg-white dark:bg-gray-800 text-black dark:text-white"
//               />
//             </div>
//           </div>

//           {/* Pincode */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Area Pincode:</label>
//             <input
//               type="text"
//               placeholder="Enter Pincode"
//               className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
//             />
//           </div>

//           {/* Submit */}
//           <div className="text-center">
//             <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
//               Confirm Booking
//             </button>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default BookAppointment;






