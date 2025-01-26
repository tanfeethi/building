import React from 'react';
import Container from '../Container/Container';

const Testimonials = () => {
    const testimonials = [
        {
            name: "عبد العزيز اليعقوب",
            title: "مصمم داخلي",
            quote: "كنت أعمل مع فريق مرجاني، وقد أعجبني كثيرًا أسلوبهم في العمل. كانوا دائمًا ملتزمين بالمواعيد.",
            image: "path_to_image_1", // Add the path to the image for عبد العزيز
        },
        {
            name: "Pedro",
            title: "Engineer",
            quote: "The team was very professional and delivered great results. Highly recommended!",
            image: "path_to_image_2", // Add the path to the image for Pedro
        },
        {
            name: "Sera",
            title: "Engineer",
            quote: "I appreciated their attention to detail and commitment to quality. Excellent service!",
            image: "path_to_image_3", // Add the path to the image for Sera
        },
    ];

    return (
        <Container className="p-8 bg-gray-100">
            <h2 className="text-center text-text-primary text-3xl font-bold mb-8">شهادات العملاء</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                        <p className="text-gray-600 text-lg italic mb-4">"{testimonial.quote}"</p>
                        <div className="flex items-center mt-4">
                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-blue-500" />
                            <div className="ml-4 text-center">
                                <h4 className="text-text-primary font-semibold">{testimonial.name}</h4>
                                <p className="text-gray-500">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Testimonials;