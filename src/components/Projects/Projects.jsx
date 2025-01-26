import React from 'react';
import Container from '../Container/Container';
import servicesPhoto1 from '../../assets/servicesPhoto1.png'; // Use the same photo temporarily
import Button from '../Buttons/Button';

const Projects = () => {
    return (
        <Container>
            <h2 className="text-text-primary text-large font-bold mb-8 text-end">مشاريعنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Project 1" className="w-full h-96 object-cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-end items-end bg-text-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h4 className="text-text-primary group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white">
                            مشروع انشاء فيلا سكنية
                        </h4>
                        <p className="text-text-primary group-hover:text-text-white text-sm mb-4">
                            تم التسليم
                        </p>
                        <Button name="معرفة المزيد" className="bg-text-primary text-white px-4 py-2 rounded-md hover:bg-text-dark transition-all duration-300" />
                    </div>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Project 2" className="w-full h-96 object-cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-end items-end bg-text-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h4 className="text-text-primary group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white">
                            مشروع انشاء برج تجاري
                        </h4>
                        <p className="text-text-primary group-hover:text-text-white text-sm mb-4">
                            تم التسليم
                        </p>
                        <Button name="معرفة المزيد" className="bg-text-primary text-white px-4 py-2 rounded-md hover:bg-text-dark transition-all duration-300" />
                    </div>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Project 3" className="w-full h-96 object-cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-end items-end bg-text-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h4 className="text-text-primary group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white">
                            مشروع بناء مكتب إداري
                        </h4>
                        <p className="text-text-primary group-hover:text-text-white text-sm mb-4">
                            تم التسليم
                        </p>
                        <Button name="معرفة المزيد" className="bg-text-primary text-white px-4 py-2 rounded-md hover:bg-text-dark transition-all duration-300" />
                    </div>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img src={servicesPhoto1} alt="Project 4" className="w-full h-96 object-cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-end items-end bg-text-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h4 className="text-text-primary group-hover:text-text-white m-2xl text-xl font-bold border-b-4 border-text-primary group-hover:border-b-4 group-hover:border-text-white">
                            مشروع تطوير منطقة سكنية
                        </h4>
                        <p className="text-text-primary group-hover:text-text-white text-sm mb-4">
                            تم التسليم
                        </p>
                        <Button name="معرفة المزيد" className="bg-text-primary text-white px-4 py-2 rounded-md hover:bg-text-dark transition-all duration-300" />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Projects;
