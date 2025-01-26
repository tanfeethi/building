import React from 'react';
import Container from '../Container/Container';
import servicesPhoto1 from '../../assets/servicesPhoto1.png'; // Replace with actual image

const Projects2 = () => {
    return (
        <Container>
            <h2 className="text-text-primary text-large font-bold mb-8 text-end">خدماتنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Card 1 */}
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 1" className="w-full h-96 object-cover" />
                    <div className="absolute right-0 bottom-0 w-full p-4 flex flex-col justify-end items-end bg-opacity-0 hover:bg-text-dark transition-all duration-300">
                        <h4 className="group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            الأعمال الإلكترونية
                        </h4>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 2" className="w-full h-96 object-cover" />
                    <div className="absolute right-0 bottom-0 w-full p-4 flex flex-col justify-end items-end bg-opacity-0 hover:bg-text-dark transition-all duration-300">
                        <h4 className="group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            الإنشائيات
                        </h4>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 3" className="w-full h-96 object-cover" />
                    <div className="absolute right-0 bottom-0 w-full p-4 flex flex-col justify-end items-end bg-opacity-0 hover:bg-text-dark transition-all duration-300">
                        <h4 className="group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            الأعمال المعمارية
                        </h4>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 4" className="w-full h-96 object-cover" />
                    <div className="absolute right-0 bottom-0 w-full p-4 flex flex-col justify-end items-end bg-opacity-0 hover:bg-text-dark transition-all duration-300">
                        <h4 className="group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            الأعمال الكهربائية
                        </h4>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 5" className="w-full h-96 object-cover" />
                    <div className="absolute right-0 bottom-0 w-full p-4 flex flex-col justify-end items-end bg-opacity-0 hover:bg-text-dark transition-all duration-300">
                        <h4 className="group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            أعمال التكييف
                        </h4>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 6" className="w-full h-96 object-cover" />
                    <div className="absolute right-0 bottom-0 w-full p-4 flex flex-col justify-end items-end bg-opacity-0 hover:bg-text-dark transition-all duration-300">
                        <h4 className="group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            أعمال الصرف الصحي
                        </h4>
                    </div>
                </div>

                {/* Card 7 */}
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 7" className="w-full h-96 object-cover" />
                    <div className="absolute right-0 bottom-0 w-full p-4 flex flex-col justify-end items-end bg-opacity-0 hover:bg-text-dark transition-all duration-300">
                        <h4 className="group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            أعمال الزراعة
                        </h4>
                    </div>
                </div>

                {/* Card 8 */}
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 8" className="w-full h-96 object-cover" />
                    <div className="absolute right-0 bottom-0 w-full p-4 flex flex-col justify-end items-end bg-opacity-0 hover:bg-text-dark transition-all duration-300">
                        <h4 className="group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            أعمال المساحة
                        </h4>
                    </div>
                </div>

                {/* Card 9 */}
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Service 9" className="w-full h-96 object-cover" />
                    <div className="absolute right-0 bottom-0 w-full p-4 flex flex-col justify-end items-end bg-opacity-0 hover:bg-text-dark transition-all duration-300">
                        <h4 className="group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            الأعمال المعملية
                        </h4>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Projects2;
