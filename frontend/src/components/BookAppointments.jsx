import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import TimePicker from './TimePicker';
import axios from "axios";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

function BookAppointment() {

  // const location = useLocation();
const navigate = useNavigate();
// const from = location.state?.from?.pathname || '/';

// useEffect(() => {
//   navigate(from, { replace: true });
// }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [selectedHour, setSelectedHour] = useState('12');
  const [selectedMinute, setSelectedMinute] = useState('00');
  const [selectedPeriod, setSelectedPeriod] = useState('AM');

  const onSubmit = async (data) => {
    const appointmentTime = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;

    // Convert yyyy-mm-dd → dd-mm-yyyy
    const [year, month, day] = data.appointmentDate.split("-");
    const formattedDate = `${day}-${month}-${year}`;

    const userInfo = {
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      preferredOffer: data.preferredOffer,
      appointmentDate: formattedDate,
      appointmentTime: appointmentTime,
      city: data.city,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/book", userInfo);
      console.log(res.data);
      if (res.data) {
        // alert("Appointment Booked Successfully");
        toast.success('Appointment Booked Successfully');
        //  navigate(from, { replace: true });
        navigate('/bookingconfirmation');
          
      }
    } catch (err) {
      console.log("Full error:", err);
      if (err.response) {
        console.log("Backend error response:", err.response.data);
        // alert("Server error: " + err.response.data.message);
        toast.error("Server error: " + err.response.data.message);
      } else {
        // alert("Error: " + err.message);
         toast.error("Error: " + err.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen py-8">
      <div className="w-full max-w-lg bg-gray-300 dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name:
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                {...register("fullName", { required: true })}
                className={`w-full px-4 py-2 border rounded-md bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-400 ${errors.fullName ? "border-red-500" : ""}`}
              />
              {errors.fullName && (
                <span className="text-sm font-semibold text-red-600">* This field is required</span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone:
              </label>
              <div className="flex">
                <span className="px-4 py-2 border border-r-0 rounded-l-md bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white">
                  +91
                </span>
                <input
                  type="tel"
                  maxLength="10"
                  placeholder="10 digits phone number"
                  {...register("phone", {
                    required: true,
                    pattern: /^[0-9]{10}$/,
                  })}
                  className={`w-full px-4 py-2 border rounded-r-md bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-400 ${errors.phone ? "border-red-500" : ""}`}
                />
              </div>
              {errors.phone && (
                <span className="text-sm font-semibold text-red-600">* Valid 10-digit phone number is required</span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
                className={`w-full px-4 py-2 border rounded-md bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-400 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <span className="text-sm font-semibold text-red-600">* Valid email address is required</span>
              )}
            </div>

            {/* Preferred Offer */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Preferred Offer:
              </label>
              <select
                {...register("preferredOffer", { required: true })}
                className={`w-full px-4 py-2 border rounded-md bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-gray-400 ${errors.preferredOffer ? "border-red-500" : ""}`}
              >
                <option value="">Select an offer</option>
                <option value="Haircut">Haircut</option>
                <option value="Facial">Facial</option>
                <option value="Beard Trim">Beard Trim</option>
                <option value="Haircut+Beard Trim">Haircut+Beard Trim</option>
                <option value="Gold Facial">Gold Facial</option>
                <option value="Hair Setting">Hair Setting</option>
                <option value="Haircolor">Haircolor</option>
              </select>
              {errors.preferredOffer && (
                <span className="text-sm font-semibold text-red-600">* This field is required</span>
              )}
            </div>

            {/* Appointment Date */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Appointment Date:
              </label>
              <input
                type="date"
                {...register("appointmentDate", { required: true })}
                className={`w-full px-4 py-2 border rounded-md bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-gray-400 ${errors.appointmentDate ? "border-red-500" : ""}`}
              />
              {errors.appointmentDate && (
                <span className="text-sm font-semibold text-red-600">* This field is required</span>
              )}
            </div>

            {/* Appointment Time */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Appointment Time:
              </label>
              <TimePicker
                selectedHour={selectedHour}
                setSelectedHour={setSelectedHour}
                selectedMinute={selectedMinute}
                setSelectedMinute={setSelectedMinute}
                selectedPeriod={selectedPeriod}
                setSelectedPeriod={setSelectedPeriod}
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                City:
              </label>
              <input
                type="text"
                placeholder="Enter City"
                {...register("city", { required: true })}
                className={`w-full px-4 py-2 border rounded-md bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-400 ${errors.city ? "border-red-500" : ""}`}
              />
              {errors.city && (
                <span className="text-sm font-semibold text-red-600">* This field is required</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition duration-300"
              >
                Confirm Booking
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;


// import React from 'react';
// import { useForm } from "react-hook-form"

// function BookAppointment() {
//   return (
//     <div className=" flex items-center justify-center bg-gray  w-full max-w-lg shadow-xl ">
//       <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
//           Book Appointment
//         </h2>

//         <form className="space-y-4"  >
//           {/* Appointment Date */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
//               Appointment Date:
//             </label>
//             <input
//               type="date"
//               className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-400"
//               style={{ colorScheme: 'light dark' }}
//             />
//           </div>

//           {/* Appointment Time */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
//               Select Appointment Time:
//             </label>
//             <input
//               type="time"
//               className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-400"
//               style={{ colorScheme: 'light dark' }}
//             />
//           </div>

//           {/* Full Name */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
//               Full Name:
//             </label>
//             <input
//               type="text"
//               placeholder="Your Full Name"
//               className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-400"
//             />
//           </div>

//           {/* Preferred Offer */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
//               Preferred Offer:
//             </label>
//             <select className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-gray-400">
//               <option>Select an offer</option>
//               <option>Haircut</option>
//               <option>Facial</option>
//               <option>Beard Trim</option>
//               <option>Haircut+Beard Trim</option>
//               <option>Gold Facial</option>
//               <option>Hair Setting</option>
//               <option>Haircolor</option>
//             </select>
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
//               Phone:
//             </label>
//             <div className="flex">
//               <span className="px-4 py-2 border border-r-0 rounded-l-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
//                 +91
//               </span>
//               <input
//                 type="tel"
//                 maxLength="10"
//                 placeholder="10 digits phone number"
//                 className="w-full px-4 py-2 border rounded-r-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-400"
//               />
//             </div>
//           </div>

//           {/* Area Pincode */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
//               City:
//             </label>
//             <input
//               type="text"
//               placeholder="Enter City"
//               className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-400"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="text-center mt-4">
//             <button
//               type="submit"
//               className="w-full bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition duration-300"
//             >
//               Confirm Booking
//             </button>
//           </div>
//         </form>
//       </div>
    
//     </div>
    
//   );
// }

// export default BookAppointment;
