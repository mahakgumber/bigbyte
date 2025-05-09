import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/about/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/ContactUS/Contact';
import Blogs from './Pages/Blogs/Blogs';
import Ecommerce from './Pages/Ecommerce-development/Ecommerce';
import Seo from './Pages/SEO/Seo';
import Web from './Pages/Web-development/Web';
import Digital from './Pages/Digital-Marketing/Digital';
import SMO from './Pages/SMO/SMO';
import Log from "./Pages/Log-In/Log";
import Test from "./Pages/Testing/Test"
import Privacy from "./Pages/Privacy/Privacy"
import Refund from './Pages/Refund-and-Return/Refund';
import Terms from './Pages/Terms-and-Conditions/Terms';
import './App.css'
import VisitUs from './components/ui/VisitUs';
import {  HelmetProvider } from 'react-helmet-async';


function App() {

  return (
    <>
     <HelmetProvider>
   <Router>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/visit-us" element={<VisitUs />} />
        <Route path="/ecommerce-development" element={<Ecommerce />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/web-development" element={<Web />} />
        <Route path="/digital-marketing" element={<Digital />} />
        <Route path="/social-media-optimization" element={<SMO />} />
        <Route path="/log-in" element={<Log />} />
        <Route path="/testing" element={<Test />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/refund-and-return-policy" element={<Refund />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
      </Routes>
    </Router>
    </HelmetProvider>
    </>
  );
}

export default App;
