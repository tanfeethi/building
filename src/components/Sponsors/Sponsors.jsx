import React from 'react';
import image1 from '../../assets/sponsorsimg1.png';
import image2 from '../../assets/sponsorsimg2.png';
import image3 from '../../assets/sponsorsimg3.png';
import image4 from '../../assets/sponsorsimg4.png';
import image5 from '../../assets/sponsorsimg5.png';

const Sponsors = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center h-20vh">
            <img src={image1} alt="Sponsors" className="max-w-full" />
            <img src={image2} alt="Sponsors" className="max-w-full" />
            <img src={image3} alt="Sponsors" className="max-w-full" />
            <img src={image4} alt="Sponsors" className="max-w-full" />
            <img src={image5} alt="Sponsors" className="max-w-full" />
        </div>
    );
};

export default Sponsors;