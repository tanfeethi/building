// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import OurProjects from '../pages/OurProjects';
import AllProjects from '../pages/AllProjects';
import ResidentialProject from '../pages/ResidentialProject';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/our-projects" element={<OurProjects />} />
                <Route path="/all-projects" element={<AllProjects />} />
                <Route path="/residential-project" element={<ResidentialProject />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;