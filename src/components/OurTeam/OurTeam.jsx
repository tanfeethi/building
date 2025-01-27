import React from 'react';
import person from '../../assets/person.png';

const OurTeam = () => {
    return (
        <div className="relative bg-text-primary min-h-screen flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center max-w-screen-lg z-10">
                <div className="flex justify-center lg:w-1/3">
                    <img src={person} alt="Engineer" className="rounded-3xl w-72 h-auto" />
                </div>

                <div className="flex flex-col lg:w-2/3 px-8 lg:px-16 text-right">
                    <div className="relative">
                        <div className="absolute -right-32 flex gap-4 h-full">
                            <div className="w-4 h-80 bg-text-dark"
                                style={{
                                    clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
                                }}></div>
                            <div className="w-4 h-80 bg-text-primary-dark"
                                style={{
                                    clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
                                }}></div>
                            <div className="w-4 h-80 bg-text-dark"
                                style={{
                                    clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
                                }}></div>
                        </div>

                        <div className="text-white">
                            <div className="text-6xl text-white mb-4">“</div>
                            <p className="text-small leading-relaxed mb-4">
                                منذ اليوم الأول للتأسيس شركة مرجع المباني المتحدة عام 2000 م. عقدت العزم على العمل بإخلاص وتفان واستقطاب أفضل الكفاءات المؤهلة وتدريب وتأهيل الشباب الواعد من أبناء الوطن وصقل قدراتهم العملية. وقد كان هذا الأساس لبداية تحقيق ماكنت أطمح إليه وبتوفيق من الله سبحانه وتعالى. لا يزال هذا الكيان قائماً وأصبح أحد الجهات التي تصنع فارقاً في تنمية وعمران المجتمع.
                            </p>

                            <p className="text-small leading-relaxed">
                                بكالوريوس هندسة كهربائية و اتصالات الكترونية، ماجستير ادارة النظم والمعلومات الهندسية، تدرج في عدة مناصب في القطاع الحكومي و القطاع الخاص أسس عمله الخاص عام 2000 م في مدينة جدة حقق من خلاله شغفه و رؤيته، يتميز بالابتكار و الإبداع والمرونة في تقديم الحلول.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
