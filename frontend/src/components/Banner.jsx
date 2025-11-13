 import React from 'react'
 import Typewriter from 'typewriter-effect';
 import banner from  '../../public/banner.jpg'
 function Banner() {
   return (
     <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  dark:bg-slate-900 dark:text-white'>
        <div className = 'w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-22 text-start'>
        
        {/* <div className="bg-orange-100 py-20 px-4 text-center shadow-md"> */}
        <div className=" py-20   ">
  <h1 className="text-4xl md:text-4xl font-serif font-bold text-gray-900  dark:bg-slate-900 dark:text-white">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Welcome to our studio.')
              .pauseFor(1000)            // Wait 1 second
              .deleteAll(50)             // Delete with speed
              .pauseFor(500)             // Short pause
              .typeString('Welcome to our studio.') // Type again
              .start(); // Do not loop again
          }}
          options={{
            loop: false,
            delay: 60, // typing speed
            cursor: '|',
          }}
        />
      </h1>
  
  <h2 className="text-2xl md:text-3xl font-serif text-orange-500 mt-2 ">
    A place where <em className="italic">every</em> cut is perfect.
  </h2>
  {/* <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg font-semibold text-purple-900 uppercase tracking-wide leading-relaxed">
    SalonSphare Hair Salon (Est. 2015) specializes in offering high quality haircuts and styling. It is our goal to provide an inclusive and comfortable environment for all people. So come in and get the cut that makes you feel like your best authentic self.
  </p> */}
   <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg font-semibold text-purple-900 uppercase tracking-wide leading-relaxed  dark:bg-slate-900 dark:text-white">
     SalonSphare Hair Salon specializes in offering high quality haircuts and styling. It is our goal to provide an inclusive and comfortable environment for all people. So come in and get the cut that makes you feel like your best authentic self.
  </p>

  <label className="input input-bordered flex items-center gap-2 bg-white text-gray-500 shadow-sm border border-gray-200 rounded-md mt-20 w-full  dark:bg-slate-900 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.92l-7.2 4.2a2.25 2.25 0 01-2.3 0l-7.2-4.2a2.25 2.25 0 01-1.07-1.92V6.75" />
              </svg>
              <input
                type="email"
                placeholder="Email"
                className="grow bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-400 "
              />
            </label>

              <button className="btn btn-secondary mt-6">Get Started</button>

        </div>

       

    </div>

        {/* Image Section */}
      <div className="w-full order-1 md:w-1/2 shadow-lg rounded-lg overflow-hidden mt-12 h-[450px] pl-1 pt-1">
    <img src={banner} alt="Studio Banner" className="w-full h-full object-cover" />
  </div>
     </div>
     </>  
   )
 }
 
 export default Banner
 