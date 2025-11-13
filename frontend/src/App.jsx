import { useState } from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Service from './service/Service'
import Basichaircuts from './service/basichaircut/Basichaircuts'
import Haircolorservices from './service/haircolorservice/Haircolorservices'
import Facials from './service/facial/Facials'
import PamperPackages from './service/pamperpackage/PamperPackages'
import GroomingPackages from './service/grooming/GroomingPackages'
import HairSetings from './service/hairdryer/HairSetings'
import Booknow from './booknow/Booknow'
import Contact from './contact/Contact'
import  { Toaster } from 'react-hot-toast';
import BookingConfirmation from './bookingconfirmation/BookingConfirmation'
// import BookAppointment from './book now/BookAppointment'
// import groomings from './service/grooming/groomings'
// import GroomingPackage from './service/grooming/Groomings'

 
// import list from '..//public/list.json'

// function Service(){
//   console.log(list);
  
// }
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="min-h-screen overflow-x-hidden bg-white text-black  dark:bg-slate-900 dark:text-white ">
      
 {/* <Home/> */}
 {/* <Service/> */}
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/service" element={<Service />} />
<Route path="/service/basichaircut" element={<Basichaircuts />} />
<Route path="/service/haircolor" element={<Haircolorservices />} />
<Route path="/service/facials" element={<Facials />}/>
<Route path="/service/pamperpackage" element={<PamperPackages />} />
{/* <Route path="/service/groomingpackage" element={<Groomings/>} /> */}
<Route path="/service/groomingpackage" element={<GroomingPackages/>} />
<Route path="/service/hairsetting" element={<HairSetings/>} />
{/* <Route path="/booknow" element={<BookAppointment/>} /> */}
<Route path="/booknow" element={<Booknow/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/bookingconfirmation" element={<BookingConfirmation/>} />


    {/* <Route path="/about" element={<About />} /> */}
 </Routes>
    <Toaster/>
</div>
 </>
  )
}

export default App
