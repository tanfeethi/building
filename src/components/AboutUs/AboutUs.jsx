import React from 'react';
import { motion } from 'framer-motion';
import rightAbout from '../../assets/rightAbout.png';
import leftAbout from '../../assets/leftAbout.png';
import Container from '../Container/Container';

const AboutUs = () => {
    return (
        <Container>
            <div className="px-4 py-8">
                <div className="flex flex-col 2xl:flex-row items-center justify-between gap-6">

                    <div className="flex gap-4">
                        <motion.img
                            src={leftAbout}
                            alt="Construction Site Left"
                            className="rounded-lg w-32 h-96 object-cover"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                        <motion.img
                            src={rightAbout}
                            alt="Construction Site Right"
                            className="rounded-lg w-80 h-96 object-cover"
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </div>

                    {/* Text Section */}
                    <div className="text-right md:w-2/3">
                        <h3 className="text-text-primary font-bold text-xl mb-4">من نحن؟</h3>
                        <p className="text-text-black text-base leading-7 mb-4 ms-xl">
                            تأسست شركة مرجع المباني المتحدة عام 2000م، وهي شركة سعودية تعمل في مجال المقاولات.
                            نقوم بتنفيذ جميع أعمال البناء الإنشائية والمعمارية والإلكتروميكانيكية. تقدم الشركة خدمات
                            متكاملة في إدارة المشاريع وأعمال التنفيذ.
                        </p>
                        <p className="text-text-black text-base leading-7">
                            نحرص على تبني الأفكار وتحويلها إلى واقع ملموس بأعلى معايير الجودة، وذلك وفقا للمواصفات
                            العالمية والمطابقة للكود السعودي للبناء.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;
