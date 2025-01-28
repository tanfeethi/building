import React from "react";
import numberOne from "../../assets/numberOne.png"; // استبدل بمسار الصورة
import Container from "../Container/Container";

const PriceSection = () => {
    return (
        <Container>
            <div className="py-10 text-end">
                <h2 className="text-large font-bold text-text-primary mb-6">أسعارنا</h2>
                <p className="text-medium text-text-grey mb-10">
                    لتقديم عرض سعر احترافي، تقوم شركة مرجع المباني بدراسة شاملة تمر بثلاث مراحل أساسية.
                </p>
                <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row justify-center items-center gap-6">
                    {/* الكارت الأزرق الأول */}
                    <div className="group relative w-64 h-40 bg-text-primary rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:w-96">
                        <div className="absolute top-4 left-4">
                            <img
                                src={numberOne}
                                alt="المرحلة الأولى"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                            <h3 className="text-large font-bold mb-2 text-text-white">المرحلة الثانية</h3>
                            <p className="text-medium text-text-white">
                                دراسة المخططات والتكاليف
                            </p>
                            <p className="text-small mt-2 text-text-grey">
                                في هذه المرحلة، يتم تحديد ميزانية المشروع بناءً على تفاصيل المواد والمواصفات.
                            </p>
                        </div>
                    </div>

                    {/* الكارت الأزرق الثاني */}
                    <div className="group relative w-64 h-40 bg-text-primary rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:w-96">
                        <div className="absolute top-4 left-4">
                            <img
                                src={numberOne}
                                alt="المرحلة الثالثة"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                            <h3 className="text-large font-bold mb-2 text-text-white">المرحلة الثالثة</h3>
                            <p className="text-medium text-text-white">
                                تنفيذ المشروع والتسليم
                            </p>
                            <p className="text-small mt-2 text-text-grey">
                                في هذه المرحلة، يتم البدء في التنفيذ وفقًا للخطط المحددة وتسليم المشروع النهائي.
                            </p>
                        </div>
                    </div>

                    {/* المرحلة الأولى (الكارت الأساسي) */}
                    <div className="relative w-96 bg-text-primary-dark text-text-white p-6 rounded-2xl flex flex-row-reverse items-center">
                        <div className="flex-shrink-0 ml-4">
                            <img
                                src={numberOne}
                                alt="المرحلة الأولى"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <div className="text-right">
                            <h3 className="text-large font-bold mb-2">المرحلة الأولى</h3>
                            <p className="text-medium">دراسة المخططات والمواصفات</p>
                            <p className="text-small mt-2">
                                في هذه المرحلة، نقوم بدراسة التفاصيل الفنية للمشروع من مخططات ومواصفات.
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-medium text-text-black mt-10">
                    اتصل بنا الآن لتعرف أفضل عرض سعر لمشروعك!
                </p>
            </div>
        </Container>
    );
};

export default PriceSection;
