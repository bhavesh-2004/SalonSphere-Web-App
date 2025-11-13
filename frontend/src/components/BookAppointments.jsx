import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import TimePicker from './TimePicker';
import axios from "axios";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

function BookAppointment() {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [selectedHour, setSelectedHour] = useState('12');
  const [selectedMinute, setSelectedMinute] = useState('00');
  const [selectedPeriod, setSelectedPeriod] = useState('AM');

  // Function to format time for backend (with leading zero for hours)
  const formatTimeForBackend = (hour, minute, period) => {
    // Add leading zero if hour is single digit
    const formattedHour = hour.padStart(2, '0');
    return `${formattedHour}:${minute} ${period}`;
  };

  const onSubmit = async (data) => {
    // Use the formatting function to ensure correct format
    const appointmentTime = formatTimeForBackend(selectedHour, selectedMinute, selectedPeriod);

    // Convert yyyy-mm-dd → dd-mm-yyyy
    const [year, month, day] = data.appointmentDate.split("-");
    const formattedDate = `${day}-${month}-${year}`;

    const userInfo = {
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      preferredOffer: data.preferredOffer,
      appointmentDate: formattedDate,
      appointmentTime: appointmentTime, // This will now be in correct format
      city: data.city,
    };

    console.log('Sending time:', appointmentTime); // Debug log

    try {
      const res = await axios.post("http://localhost:4001/user/book", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success('Appointment Booked Successfully');
        navigate('/bookingconfirmation');
      }
    } catch (err) {
      console.log("Full error:", err);
      if (err.response) {
        console.log("Backend error response:", err.response.data);
        toast.error("Server error: " + err.response.data.message);
      } else {
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
              {/* Display the formatted time for debugging */}
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Selected time: {formatTimeForBackend(selectedHour, selectedMinute, selectedPeriod)}
              </div>
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