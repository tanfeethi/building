import React, { useRef } from 'react';
import { FaBuilding, FaDollarSign, FaClock, FaHeadset } from 'react-icons/fa';
import heroSection from '../../assets/heroSection.jpg';
import Button from '../Buttons/Button';
import { motion, useInView } from "motion/react"
const Hero = () => {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <div className="relative h-screen px-8xl bg-cover bg-center text-left" style={{ backgroundImage: `url(${heroSection})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 text-white flex flex-col justify-center h-full">
                <h1 className="text-xlarge font-bold mb-l">
                    Building with the future with the highest standards of quality and innovation
                </h1>
                <p className="text-medium mb-2xl">
                    We provide comprehensive contracting services, including design, construction, and renovation, with top-notch
                    quality and professionalism. Our team is ready to turn your ideas into reality. Contact us now to start your
                    project with confidence.
                </p>
                <Button className="text-text-white bg-text-primary px-l py-m rounded-2xl font-medium transition" name={"Learn More"} />
            </div>

            <div className="absolute bottom-[-1rem] left-0 right-0 flex justify-center z-20">
            <div ref={ref} className="grid grid-cols-4 gap-4 bg-white shadow-lg p-4 rounded-2xl w-11/12">
                {/* Single Feature Block */}
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                >
                    <FaBuilding className="text-primary w-10 h-10 mb-2" />
                    <h3 className="font-bold text-lg">Reliable Construction</h3>
                    <p className="text-sm text-gray-600 text-center">
                        We are committed to delivering reliable construction services with quality and compliance with
                        engineering standards.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                >
                    <FaDollarSign className="text-primary w-10 h-10 mb-2" />
                    <h3 className="font-bold text-lg">Affordable Prices</h3>
                    <p className="text-sm text-gray-600 text-center">
                        Executing your projects at the best cost without compromising specifications or engineering standards.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                >
                    <FaClock className="text-primary w-10 h-10 mb-2" />
                    <h3 className="font-bold text-lg">On-Time Delivery</h3>
                    <p className="text-sm text-gray-600 text-center">
                        We execute your projects at the best cost, without compromising on specifications, standards, or quality.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                >
                    <FaHeadset className="text-primary w-10 h-10 mb-2" />
                    <h3 className="font-bold text-lg">Available 24/7</h3>
                    <p className="text-sm text-gray-600 text-center">
                        Available 24/7 for technical support and consultations to ensure project continuity.
                    </p>
                </motion.div>
            </div>
        </div>
        </div>
    );
};

export default Hero;
