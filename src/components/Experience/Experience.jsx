import React from 'react';
import Container from "../Container/Container";
import servicesPhoto1 from '../../assets/servicesPhoto1.png';

const Experience = () => {
    return (
        <Container>
            <h2 className="text-text-primary text-large font-bold text-center mb-8">الخبرة تجعلنا واثقين</h2>
            <p className="text-text-black text-medium text-center mb-12">
                أكثر من 20 عامًا من الخبرة في تقديم خدمات المقاولات بجودة واحترافية، لنكون شريكك الموثوق في تنفيذ المشاريع.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">

                {/* العنصر الأول */}
                <div className="relative">
                    <img
                        src={servicesPhoto1}
                        className="w-[286px] h-[596px] object-cover"
                        style={{
                            clipPath: "polygon(0 0, 85% 0%, 100% 100%, 0 100%)",
                        }}
                        alt="servicesPhoto1"
                    />
                    <div
                        style={{
                            clipPath: "polygon(0 0, 85% 0%, 100% 100%, 0 100%)",
                        }}
                        className="absolute w-[286px] h-[596px] top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-text-dark bg-opacity-50">
                        <h4 className="text-white text-3xl font-bold">+239</h4>
                    </div>
                </div>

                <div className="relative">
                    <img
                        src={servicesPhoto1}
                        className="w-[286px] h-[296px] object-cover"
                        style={{
                            clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
                        }}
                        alt="servicesPhoto1"
                    />
                    <div
                        style={{
                            clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
                        }}
                        className="absolute w-[286px] h-[296px] top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-text-dark bg-opacity-50">
                        <h4 className="text-white text-3xl font-bold">+49</h4>
                    </div>
                </div>

                <div className="relative">
                    <img
                        src={servicesPhoto1}
                        className="w-[286px] h-[296px] object-cover"
                        style={{
                            clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
                        }}
                        alt="servicesPhoto1"
                    />
                    <div
                        style={{
                            clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
                        }}
                        className="absolute w-[286px] h-[296px] top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-text-dark bg-opacity-50">
                        <h4 className="text-white text-3xl font-bold">+21</h4>
                    </div>
                </div>

                <div className="relative">
                    <img
                        src={servicesPhoto1}
                        className="w-[286px] h-[296px] object-cover"
                        style={{
                            clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
                        }}
                        alt="servicesPhoto1"
                    />
                    <div
                        style={{
                            clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
                        }}
                        className="absolute w-[286px] h-[296px] top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-text-dark bg-opacity-50">
                        <h4 className="text-white text-3xl font-bold">+3</h4>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Experience;
