import React from "react";
import ContainerPhoto from "../../assets/container.jpg"; // Replace with the actual image path

const Expertise = () => {
    return (
        <div className="flex flex-col items-center p-8 bg-white">
            <div className="relative w-full md:w-3/4 flex flex-col md:flex-row items-center mb-12">
                <div className="relative w-full md:w-1/2">
                    <div
                        className="relative w-full h-[265px] bg-primary-dark overflow-hidden rounded-lg shadow-lg"
                        style={{
                            clipPath: "polygon(0 0, 60% 0%, 100% 100%, 0 100%)",
                        }}
                    >
                        <img
                            src={ContainerPhoto}
                            alt="Expertise"
                            className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
                        />
                        <div
                            className="absolute bottom-0 left-0 right-32 p-4 text-white bg-text-primary"
                            style={{
                                clipPath: "polygon(0 0, 85% 0%, 100% 100%, 0 100%)",
                            }}
                        >
                            <p className="text-sm">
                                أكثر من 20 عامًا من الخبرة في تقديم خدمات المقاولات بجودة واحترافية، لنكون شريكك الموثوق في تنفيذ المشاريع.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 px-6 mt-6 md:mt-0 text-right">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        <span className="text-primary">في شركة مرجع المباني المتحدة</span>
                    </h2>
                    <p className="text-base text-gray-600 leading-relaxed">
                        نحرص على تقديم أفضل الخدمات المتكاملة في مجال المقاولات. هدفنا تحقيق أعلى معايير الجودة في جميع مشاريعنا لتلبية توقعات عملائنا.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center">
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-xl font-semibold text-black border-b-2 border-black hover:text-primary hover:border-primary transition">
                        خدمات البناء الشاملة
                    </h3>
                    <p className="text-sm text-gray-600">
                        نوفر خدمات بناء متكاملة تلبي كافة احتياجاتك من التصميم إلى التنفيذ.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-xl font-semibold text-black border-b-2 border-black hover:text-primary hover:border-primary transition">
                        العمل وفق ميزانية محددة
                    </h3>
                    <p className="text-sm text-gray-600">
                        نلتزم بتقديم خدمات ذات جودة مع مراعاة قيود الميزانية المحددة للمشروع.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-xl font-semibold text-black border-b-2 border-black hover:text-primary hover:border-primary transition">
                        متابعة مشروعك والإشراف عليه
                    </h3>
                    <p className="text-sm text-gray-600">
                        نقدم إشرافًا دقيقًا لضمان التنفيذ بجودة عالية وتسليم المشروع في الوقت المحدد.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Expertise;
