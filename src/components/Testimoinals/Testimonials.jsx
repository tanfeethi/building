import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import { Navigation, Pagination, Autoplay } from "swiper";

const Testimonials = () => {
    const testimonials = [
        {
            name: "عبدالعزيز اليعقوب",
            title: "مصمم داخلي",
            quote: "كنت قلقًا بشأن الانتهاء من المشروع في الوقت المحدد، ولكنكم تجاوزتم التوقعات وأنهيتم العمل قبل الموعد المحدد. بارك الله فيكم.",
            image: "path_to_image_1",
        },
        {
            name: "Pedro",
            title: "Engineer",
            quote: "من أقوى المقاولين في جدة، مع خبرة تقارب 20 عامًا في بناء الخرسانة المسلحة.",
            image: "path_to_image_2",
        },
        {
            name: "Sera",
            title: "Engineer",
            quote: "كنت قلقًا بشأن الانتهاء من المشروع في الوقت المحدد، ولكنكم تجاوزتم التوقعات وأنهيتم العمل قبل الموعد المحدد. بارك الله فيكم.",
            image: "path_to_image_3",
        },
        {
            name: "Ali",
            title: "مهندس مدني",
            quote: "عمل رائع وخدمة ممتازة، بالتأكيد أوصي بهم لأي مشروع كبير.",
            image: "path_to_image_4",
        },
        {
            name: "Lina",
            title: "مهندسة معمارية",
            quote: "الاحترافية في التعامل جعلتني أشعر بالراحة طوال فترة المشروع.",
            image: "path_to_image_5",
        },
    ];

    return (
        <div className="bg-gray-900 py-16">
            <h2 className="text-center text-white text-3xl font-bold mb-12">
                شهادات العملاء
            </h2>
            <div className="container mx-auto">
                <Swiper
                    // modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    // navigation
                    // pagination={{ clickable: true }}
                    // autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                <div className="bg-white rounded-lg shadow-lg p-8 relative text-center">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                        <span className="text-6xl text-gray-300 font-bold">“</span>
                                    </div>
                                    <p className="text-gray-600 text-lg mb-8">{testimonial.quote}</p>
                                    <h4 className="text-gray-800 font-semibold">{testimonial.name}</h4>
                                    <p className="text-gray-500">{testimonial.title}</p>

                                    <div
                                        className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0"
                                        style={{
                                            borderLeft: "10px solid transparent",
                                            borderRight: "10px solid transparent",
                                            borderTop: "10px solid white",
                                        }}
                                    ></div>
                                </div>
                                <div className="mt-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full border-2 border-gray-800"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
