import React from 'react';
import Container from '../Container/Container';
import aboutusSection1 from '../../assets/aboutusSection1.png';  
import aboutusSection2 from '../../assets/aboutusSection2.png'; 
import aboutusSection3 from '../../assets/aboutusSection3.png'; 
import aboutusSection4 from '../../assets/aboutusSection4.png'; 

const AboutUs2 = () => {
    return (
        <Container className="p-8 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div className="md:w-1/2 text-right">
                    <h2 className="text-text-primary text-3xl font-bold mb-4">من نحــــــن</h2>
                    <p className="text-gray-700">
                        في عالم البناء مرجعك الأول شركة مرجع المباني المتحدة تأسست شركة مرجع المباني المتحدة عام 2000م، وهي شركة سعودية تعمل في مجال المقاولات، نقوم بتنفيذ جميع أعمال البناء الإنشائية والمعمارية والإلكتروميكانيكية. نقدم خدمات متكاملة في إدارة المشاريع وأعمال التنفيذ. نحرص على تبني الأفكار وتحويلها إلى واقع ملموس بأعلى معايير الجودة. وذلك وفقا للمواصفات العالمية والمطابقة للكود السعودي للبناء.
                    </p>
                </div>
                {/* <div className="md:w-1/2 mt-4 md:mt-0">
                    <img src={aboutusSection1} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
                </div> */}
            </div>

            {/* "قصتنا" Section */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-12">
                <div className="md:w-1/2 text-right">
                    <h2 className="text-text-primary text-3xl font-bold mb-4">قصتنـــــــــا</h2>
                    <p className="text-gray-700">
                        تسعى جاهدين لتصبح شركة مرجع الصباني المتحدة أحد أبرز رواد شركات المقاولات في المملكة العربية السعودية وتساهم في تحقيق رؤية المملكة 2030 في قطاع المقاولات ولنا الفخر في تحقيق الأهداف الوطنية وتطوير المشاريع.
                    </p>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                    <img src={aboutusSection1} alt="Our Story" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>

            {/* "رؤيتنا" Section */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div className="md:w-1/2 text-right">
                    <h2 className="text-text-primary text-3xl font-bold mb-4">رؤيتنــــــــا</h2>
                    <p className="text-gray-700">
                        تهدف دائما لتحقيق تطلعات عملائنا وتلبية احتياجاتهم بكل تفان و تقديم خدمات مميزة تتسم بأعلى معايير الجودة والاحترافية، وتسعى للتحسين المستمر والابتكار، حيث تواكب التقنيات والاتجاهات الحديثة في مناعتنا وتستثمر في تطوير قدراتنا وتوسيع معرضنا التضمن تقديم أفضل الخدمات وأكثرها تطورار.
                    </p>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                    <img src={aboutusSection2} alt="Our Vision" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>

            {/* "هدفنا" Section */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-12">
                <div className="md:w-1/2 text-right">
                    <h2 className="text-text-primary text-3xl font-bold mb-4">هدفنــــــا</h2>
                    <p className="text-gray-700">
                        الجود والإتقان، نحرص على تحقيق أعلى مستويات الجودة في جميع مشاريعنا. وتستخدم أحدث التقنيات والمواد ذات الجودة العالية لضمان نتائج ممتازة ونضمن تنفيذ الأعمال بدقة واحترافية عالية مع الالتزام بالمواصفات والمعايير.
                    </p>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                    <img src={aboutusSection3} alt="Our Goal" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>

            {/* "قيمنــــــــا" Section */}
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-right">
                    <h2 className="text-text-primary text-3xl font-bold mb-4">قيمنــــــــا</h2>
                    <p className="text-gray-700 mb-2"><strong>الجودة والإتقان</strong> نحرص على تحقيق أعلى مستويات الجودة في جميع مشاريعنا. وتستخدم أحدث التقنيات والمواد ذات الجودة العالية لضمان نتائج ممتازة ونضمن تنفيذ الأعمال بدقة واحترافية عالية مع الالتزام بالمواصفات والمعايير.</p>
                    <p className="text-gray-700 mb-2"><strong>الثقة والمصداقية</strong> تلتزم بتلبية متطلبات واحتياجات عملائنا ونلتزم بتحقيق المواعيد المحددة مما يعزز لفتهم بنا.</p>
                    <p className="text-gray-700 mb-2"><strong>الابتكار والتطوير</strong> نهتم بالابتكار واستخدام أحدث التقنيات في مجال المقاولات وتسعى لتحسين عملياتنا وتطوير أساليب العمل لتلبية متطلبات السوق المتغيرة. وتشجع فريق العمل على التفكير الإبداعي وتقديم حلول جديدة وفعالة لحسين أداء المشاريع.</p>
                    <p className="text-gray-700 mb-2"><strong>الالتزام والمسؤولية</strong> نلتزم بتنفيذ المشاريع وفقا للمعايير القانونية والأخلاقية، ونحافظ على بيئة عمل آمنة وصحية لجميع العاملين معنا.</p>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                    <img src={aboutusSection4} alt="Our Values" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </Container>
    );
};

export default AboutUs2;
