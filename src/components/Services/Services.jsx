import React from 'react';
import Container from '../Container/Container';
import servicesPhoto1 from '../../assets/servicesPhoto1.png';

const Services = () => {
    return (
        <Container>
            <h2 className="text-text-primary text-large font-bold mb-8 text-end">خدماتنا</h2>
            <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 gap-8">

                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 1" className="w-full h-96 object-cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-end items-end hover:bg-text-dark bg-opacity-50 group-hover:bg-opacity-50 transition-all duration-300">
                        <h4 className="text-text-primary group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white">
                            الأعمال الإلكترونية
                        </h4>
                    </div>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 2" className="w-full h-96 object-cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-end items-end hover:bg-text-dark bg-opacity-50 group-hover:bg-opacity-50 transition-all duration-300">
                        <h4 className="text-text-primary group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white">
                            الإنشائيات
                        </h4>
                    </div>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 3" className="w-full h-96 object-cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-end items-end hover:bg-text-dark bg-opacity-50 group-hover:bg-opacity-50 transition-all duration-300">
                        <h4 className="text-text-primary group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white">
                            الأعمال المعمارية
                        </h4>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default Services;
