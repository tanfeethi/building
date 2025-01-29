import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import person from "../../assets/person.png";
import Container from "../Container/Container";

const OurTeam = () => {
    const [isZoomedIn, setIsZoomedIn] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsZoomedIn(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative bg-text-primary min-h-screen flex items-center justify-center px-6 lg:px-20">
            <Container>
                <div className="flex flex-col 2xl:flex-row-reverse xl:flex-row-reverse items-center max-w-screen-xl w-full">
                    <div className="relative flex justify-center 2xl:w-1/3 xl:w-1/3 mb-6 lg:mb-0 mt-xl">
                        <div className="absolute top-10 right-5 hidden gap-3 h-full 2xl:flex xl:flex flex-row justify-center">
                            <div
                                className="w-8 h-[340px] bg-text-primary-dark"
                                style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}
                            ></div>
                            <div
                                className="w-8 h-[240px] relative mt-24 bg-text-primary-dark"
                                style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}
                            ></div>
                            <div
                                className="w-8 h-[140px] relative mt-48 bg-text-primary-dark"
                                style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}
                            ></div>
                        </div>

                        <div className="bg-text-white w-80 rounded-3xl me-60 lg:me-0 lg:w-60 md:me-0 md:w-40 sm:me-0 sm:w-40">
                            <motion.div
                                initial={{ scale: 1.1 }}
                                animate={{ scale: isZoomedIn ? 1.1 : 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            >
                                <img
                                    src={person}
                                    alt="Engineer"
                                    className="lg:me-40 md:me-0 sm:me-0 md:mt-xl sm:mt-xl"
                                />
                            </motion.div>
                        </div>
                    </div>

                    <div className="relative my-12 flex flex-col 2xl:w-2/3 xl:w-2/3 px-4 2xl:px-16 xl:px-16 lg-px-16 text-right text-white">
                        <h2 className="text-2xl font-semibold mb-2">المهندس</h2>
                        <h1 className="text-4xl font-bold mb-6">خالد بدر الدين</h1>

                        <div className="relative">
                            <div className="text-6xl text-blue-300 mb-4">“</div>
                            <p className="text-lg leading-loose mb-6">
                                منذ اليوم الأول للتأسيس شركة مرجع المباني المتحدة عام 2000 م. عقدت العزم على العمل بإخلاص وتفان واستقطاب أفضل
                                الكفاءات المؤهلة وتدريب وتأهيل الشباب الواعد من أبناء الوطن وصقل قدراتهم العملية. وقد كان هذا الأساس لبداية
                                تحقيق ماكنت أطمح إليه وبتوفيق من الله سبحانه وتعالى. لا يزال هذا الكيان قائماً وأصبح أحد الجهات التي تصنع
                                فارقاً في تنمية وعمران المجتمع.
                            </p>
                            <p className="text-lg leading-loose">
                                بكالوريوس هندسة كهربائية و اتصالات الكترونية، ماجستير إدارة النظم والمعلومات الهندسية، تدرج في عدة مناصب في
                                القطاع الحكومي و القطاع الخاص. أسس عمله الخاص عام 2000 م في مدينة جدة حقق من خلاله شغفه و رؤيته، يتميز
                                بالابتكار و الإبداع والمرونة في تقديم الحلول.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurTeam;
