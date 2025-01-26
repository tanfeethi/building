import React from 'react';
import { FaStar } from 'react-icons/fa';
import aboutusSection from '../../assets/aboutusSection.jpg';
import Button from '../Buttons/Button';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap items-center justify-between">

                {/* Image on the left */}
                <div className="relative w-full md:w-1/2">
                    <img
                        src={aboutusSection}
                        alt="Construction Site"
                        className="rounded-lg w-full h-full object-cover"
                    />
                </div>

                {/* Text on the right */}
                <div className="w-full md:w-1/2 md:pr-8 mt-6 md:mt-0">
                    <h3 className="text-text-primary font-bold text-lg mb-4 text-right">مـــــن نحن؟</h3>
                    <p className="text-gray-700 text-base leading-6 mb-6 text-right">
                        تأسست شركة مرجع المباني المتحدة عام 2000م، وهي شركة سعودية تعمل في مجال المقاولات. 
                        نقوم بتنفيذ جميع أعمال البناء الإنشائية والمعمارية والإلكتروميكانيكية. تقدم الشركة خدمات 
                        متكاملة في إدارة المشاريع وأعمال التنفيذ.
                    </p>
                    <p className="text-gray-700 text-base leading-6 mb-6 text-right">
                        نحرص على تبني الأفكار وتحويلها إلى واقع ملموس بأعلى معايير الجودة، وذلك وفقا للمواصفات 
                        العالمية والمطابقة للكود السعودي للبناء.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
