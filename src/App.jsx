import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/about/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/ContactUs/Contact';
import Blogs from './Pages/Blogs/Blogs';
import Ecommerce from './Pages/Ecommerce-development/Ecommerce';
import Seo from './Pages/SEO/Seo';
import Web from './Pages/Web-development/Web';
import Digital from './Pages/Digital-Marketing/Digital';
import Mobile from './Pages/Mobile-App-Development/Mobile';
import BI from './Pages/Business-Intelligence/BI';
import Health from './Pages/Healthcare-Sector/Health';
import Financial from './Pages/Financial-Sector/Financial';
import SMO from './Pages/SMO/SMO';
<<<<<<< HEAD
import Log from "./Pages/Log-In/Log";
import Test from "./Pages/Testing/Test"
=======
import Test from './Pages/Testing/Test';
import VisitUs from './components/ui/VisitUs';
>>>>>>> dec2bde39104ba095d7488c824ac11ac18b74e98
import './App.css'
import VisitUs from './components/ui/VisitUs';

function App() {

  return (
    <>
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
        <Route path="/mobile-app-development" element={<Mobile />} />
        <Route path="/business-intelligence" element={<BI />} />
        <Route path="/financial-sector" element={<Financial />} />
        <Route path="/healthcare-sector" element={<Health />} />
<<<<<<< HEAD
        <Route path="/log-in" element={<Log />} />
        <Route path="/testing" element={<Test />} />
=======
        <Route path="/testing" element={<Test />} />

        

>>>>>>> dec2bde39104ba095d7488c824ac11ac18b74e98
      </Routes>
    </Router>
    </>
  );
}

export default App;
