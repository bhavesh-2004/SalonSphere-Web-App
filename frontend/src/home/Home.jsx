import React from 'react'
import Navbar from '../components/Navbar'
import StatsSection from '../components/Stats'
import Banner from '../components/Banner'
import Haircut from '../components/Haircut'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className=' dark:bg-slate-900 dark:text-white'>
 <Navbar/>
  <Banner/>
  <StatsSection/>
    <Haircut/>
  <Footer/>
    </div>
  )
}

export default Home
