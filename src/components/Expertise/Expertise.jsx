import React from "react";
import ContainerPhoto from "../../assets/container.jpg"; // Replace with the actual image path
import Container from "../Container/Container";

const Expertise = () => {
    return (
        <Container>
            <div className="py-12">
                <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row items-center justify-between mb-16 px-6 lg:px-0">
                    <div className="relative lg:w-1/2 w-full mb-8 lg:mb-0">
                        <div
                            className="relative w-full h-[265px] bg-primary-dark overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform group"
                        >
                            <img
                                src={ContainerPhoto}
                                style={{
                                    clipPath: "polygon(0 0, 60% 0%, 100% 100%, 0 100%)",
                                }}
                                alt="Expertise"
                                className="absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-all duration-300 group-hover:scale-110"
                            />
                            <div
                                className="absolute bottom-0 left-0 right-32 p-4 text-white bg-text-primary"
                                style={{
                                    clipPath: "polygon(0 0, 90% 0%, 100% 100%, 0 100%)",
                                }}
                            >
                                <p className="text-sm">
                                    أكثر من 20 عامًا من الخبرة في تقديم خدمات المقاولات بجودة واحترافية، لنكون شريكك الموثوق في تنفيذ المشاريع.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full text-right">
                        <p className="text-3xl font-bold text-primary mb-4 text-text-primary">
                            في شركة مرجع المباني المتحدة<p className="text-text-black"> نحرص على</p>
                        </p>
                    </div>
                </div>

                <div className="container mx-auto grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-12 px-6 lg:px-0">
                    <div className="text-center group">
                        <h3 className="text-lg font-bold text-misty mb-4 border-b-2 border-transparent inline-block text-text-primary group-hover:text-text-black group-hover:border-text-black transition-all duration-300">
                            خدمات البناء الشاملة
                        </h3>
                        <p className="text-medium text-text-black">
                            نوفر لعملائنا الراحة من خلال تقديم جميع احتياجاتهم في مشاريع البناء من الحفر وحتى تسليم المفتاح بأفضل جودة وأقل تكلفة وأسرع تنفيذ.
                        </p>
                    </div>

                    <div className="text-center group">
                        <h3 className="text-lg font-bold text-misty mb-4 border-b-2 border-transparent inline-block text-text-primary group-hover:text-text-black group-hover:border-text-black transition-all duration-300">
                            العمل وفق ميزانية محددة
                        </h3>
                        <p className="text-medium text-text-black">
                            نوفر الوضوح والمسؤولية. إذا اتفقنا معك على ميزانية محددة تتوافق مع احتياجاتك، نتناسب مع المطلوب لإكمال المشروع حتى تسليم المفتاح.
                        </p>
                    </div>

                    <div className="text-center group">
                        <h3 className="text-lg font-bold text-misty mb-4 border-b-2 border-transparent inline-block text-text-primary group-hover:text-text-black group-hover:border-text-black transition-all duration-300">
                            متابعة مشروعك والإشراف عليه
                        </h3>
                        <p className="text-medium text-text-black">
                            نحرص على راحتك والاطمئنان على سير مشروعك. لذلك نقوم بإبلاغك عن مراحل المشروع بشكل منتظم.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Expertise;
