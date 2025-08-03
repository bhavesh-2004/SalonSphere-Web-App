import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 
    
 <BrowserRouter>
 <div className='dark:bg-slate-700 dark:text-white '>
  <App />
 </div>
 
 </BrowserRouter>



// we can take Browser tag also instead of StrictMode

)
