import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaRegEnvelope,    
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  return (
 <div>
  <hr />
     <footer className="bg-while-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-8 px-4 md:px-20 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

        {/* SalonSphere Branding */}
        <div>
          <h1 className="text-2xl font-bold text-blue-800">SalonSphere</h1>
          <p className="mt-3 text-sm text-gray-500">© {new Date().getFullYear()} SALONSPHERE PRIVATE LIMITED</p>
        </div>

        {/* Quick Links */}
        <div className="text-sm space-y-1">
          <p className="font-semibold mb-2">Explore</p>
          <a href="#" className="hover:text-blue-600">Home</a><br />
          <a href="#" className="hover:text-blue-600">Menu</a><br />
          {/* <a href="#" className="hover:text-blue-600">Hot Deals</a><br /> */}
          {/* <a href="#" className="hover:text-blue-600">Branches</a><br /> */}
          <a href="#" className="hover:text-blue-600">New Arrivals</a><br />
          {/* <a href="#" className="hover:text-blue-600">Franchise</a> */}
        </div>

        {/* Company */}
        <div className="text-sm space-y-1">
          <p className="font-semibold mb-2">Company</p>
          <a href="#" className="hover:text-blue-600">Career</a><br />
          <a href="#" className="hover:text-blue-600">CSR</a><br />
          <a href="#" className="hover:text-blue-600">R&R</a>
        </div>

        {/* Legal */}
        <div className="text-sm space-y-1">
          <p className="font-semibold mb-2">Legal</p>
          <a href="#" className="hover:text-blue-600">Privacy Policy</a><br />
          <a href="#" className="hover:text-blue-600">Terms & Conditions</a><br />
          <a href="#" className="hover:text-blue-600">Refund & Cancellation</a>
        </div>

        {/* Contact + Social */}
        <div className="text-sm space-y-3">
          <p className="font-semibold mb-1">Contact</p>
          <div className="flex items-center gap-2 text-blue-800">
            <FaPhoneAlt /> <span>+91 9322545899</span>
          </div>
        <div className="flex items-center gap-2 text-gray-800 dark:text-white">
<FaRegEnvelope className="text-blue-700" />

  <span className="text-sm md:text-base">appointments@salonsphere.in</span>
</div>

          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" />
            <span>
              Krantinagar, Bus Stand<br />
              Wadala Wadali, Chalisgaon, Jalgaon - 424102 
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a href="#" className="text-blue-700 flex flex-col items-center text-xs">
              <FaFacebook size={20} />
              {/* <span>1K Follows</span> */}
            </a>
            <a href="#" className="text-pink-500 flex flex-col items-center text-xs">
              <FaInstagram size={20} />
              {/* <span>632 Follows</span> */}
            </a>
            <a href="#" className="text-blue-600 flex flex-col items-center text-xs">
              <FaLinkedin size={20} />
              {/* <span>34 Follows</span> */}
            </a>
            <a href="#" className="text-red-600 flex flex-col items-center text-xs">
              <FaYoutube size={20} />
              {/* <span>893 Follows</span> */}
            </a>
          </div>
        </div>

      </div>
    </footer>
 </div>
  );
};

export default Footer;
