import React from 'react';
import ContainerPhoto from '../../assets/container.jpg'; // Your image
import Container from '../Container/Container';

const Expertise = () => {
    return (
        <Container className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
            <div className="md:w-1/2 flex flex-col">
                <div className="md:w-1/2 flex flex-col relative">
                    <h2 className="text-text-primary text-3xl font-bold mb-4">
                        في شركة المرجاني المحدودة نحرص على
                    </h2>
                    <div className="absolute top-0 left-0 right-0 bottom-0">
                        <img
                            src={ContainerPhoto}
                            alt="Expertise"
                            className="w-full h-auto object-cover rounded-t-lg rounded-tr-lg md:rounded-t-none md:rounded-r-lg shadow-lg transform -skew-x-12"
                        />
                    </div>
                </div>
                <p className="text-gray-700 mb-2">
                    خدمات البناء الشاملة
                </p>
                <p className="text-gray-700 mb-2">
                    العمل وفق ميزانية محددة
                </p>
                <p className="text-gray-700 mb-2">
                    نوفر أفضل الحلول لمشاريعكم
                </p>
                <p className="text-gray-700 mb-4">
                    نقدم خدمات استشارية متكاملة لضمان نجاح مشاريعكم.
                </p>
                <p className="text-gray-700 mb-4">
                    نحن نضمن التزامنا بالمواعيد النهائية والجودة العالية في العمل.
                </p>
                <p className="text-gray-700 mb-4">
                    تواصلوا معنا لمزيد من التفاصيل حول خدماتنا.
                </p>
            </div>

        </Container>
    );
};

export default Expertise;