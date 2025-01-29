// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import OurProjects from '../pages/OurProjects';
import ResidentialProject from '../pages/ResidentialProject';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Navbar from '../components/Navbar/Navbar';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<OurProjects />} />
                {/* <Route path="/residential-project" element={<ResidentialProject />} /> */}
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;