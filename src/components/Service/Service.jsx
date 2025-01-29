import React, { useRef } from "react";
import { motion } from "framer-motion";
import Container from "../Container/Container";
import servicesPhoto1 from "../../assets/servicesPhoto1.png";

const Service = () => {
    const services = [
        { id: 1, title: "الأعمال الإلكترونية", image: servicesPhoto1 },
        { id: 2, title: "الإنشائيات", image: servicesPhoto1 },
        { id: 3, title: "الأعمال المعمارية", image: servicesPhoto1 }
    ];

    return (
        <Container>
            <h2 className="text-text-primary text-large font-bold mb-8 text-end">خدماتنا</h2>
            
            <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 gap-8">

                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        className="relative rounded-lg overflow-hidden shadow-lg group w-full h-96 cursor-pointer bg-white"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}  // ✅ Ensures animation happens only on first view
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 scale-90 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 w-full h-full bg-text-dark opacity-0 group-hover:opacity-50 transition-all duration-500"></div>

                        <motion.div className="absolute bottom-4 right-4">
                            <h4 className="text-text-primary mb-xl text-xl font-bold border-b-4 border-text-primary transition-all duration-300 group-hover:text-text-white group-hover:border-text-white">
                                {service.title}
                            </h4>
                        </motion.div>
                    </motion.div>
                ))}

            </div>
        </Container>
    );
};

export default Service;
