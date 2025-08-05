
import React from "react";
import toast from 'react-hot-toast';


export const Contacts = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "83fbaec5-c98b-4032-9cfd-ded66fb02657");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      // alert("✅ Message sent successfully!");
        toast.success("Message sent successfully!");


      event.target.reset();
    } else {
      // alert("❌ Failed to send message. Please try again later.");
         toast.error("❌ Failed to send message. Please try again later." );


    }
  };

  return (
    <section className="min-h-screen py-12 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <form onSubmit={handleFormSubmit} className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <div>
            <label htmlFor="username" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              autoComplete="off"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border bg-white  border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

  <div className="mb-4">
  <label htmlFor="mobileNumber" className="block mb-1 font-medium text-sm">
    Mobile Number
  </label>
  <div className="flex items-center border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600 focus-within:ring-2 focus-within:ring-amber-600">
    
    <span className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded-l-md border-r dark:border-gray-500 text-sm">
      <img
        src="https://flagcdn.com/w40/in.png"
        alt="India flag"
        className="w-5 h-4 mr-1 rounded-sm"
      />
      +91
    </span>
    <input
      type="tel"
      name="mobileNumber"
      id="mobileNumber"
      required
      autoComplete="tel"
      placeholder="Enter 10-digit mobile number"
      maxLength="10"
      pattern="[0-9]{10}"
      className="w-full px-3 py-2 rounded-r-md bg-white text-black dark:bg-gray-700 dark:text-white focus:outline-none"
    />
  </div>
</div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="off"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              required
              autoComplete="off"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-800 hover:bg-amber-700 dark:bg-slate-900 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
