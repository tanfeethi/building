import React from 'react';
import ContainerPhoto from '../../assets/container.jpg';
import Button from '../Buttons/Button';
import Container from '../Container/Container';

const Expertise = () => {
    return (
        <div
            className="relative h-screen px-8xl bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${ContainerPhoto})` }}
        >
            <Container>

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-white">
                    <h1 className="text-xlarge font-bold mb-l">Let Us Help You Execute Your Project</h1>
                    <p className="text-medium mb-2xl">
                        We are here to turn your ideas into reality with the highest standards of quality and professionalism. Contact us today, and let us assist you in executing your projects with precision and expertise.
                    </p>
                    <Button name={"Contact Us"} className="text-text-white px-l py-m rounded-2xl font-medium border border-text-white transition" />

                </div>
            </Container>

        </div>
    );
};

export default Expertise;
