import React from 'react';
import Container from '../Container/Container';
import person from '../../assets/person.png';

const TeamDetails = () => {
    return (
        <Container>
            <div className='space-y-4'>
                <div className='flex relative'>
                    {/* "s" div with absolute positioning */}
                    <div className='bg-text-grey-hover me-6xl w-16 h-16 flex justify-center items-end absolute bottom-0'>
                        <div className='w-16 bg-text-grey'>s</div>
                        <div className='w-16'>s</div>
                    </div>

                    <img src={person} alt="Engineer" className="rounded-3xl w-36 h-auto relative bottom-[-32px] left-48" />
                </div>

                <div className='flex text-text-primary'>
                    <div className='bg-text-grey flex items-center justify-center w-12 h-20'
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)",
                        }}
                    >
                        hhh
                    </div>

                    <div
                        className="bg-text-grey-hover border border-e-4 border-opacity-5 border-text-grey flex items-center justify-center w-20 h-52"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 38%)",
                        }}
                    >
                    </div>

                    <div className='flex bg-text-grey-hover w-80 flex-col items-end'>
                        <h3 className='text-medium'>م. محمد اسامة</h3>
                        <p className='text-small'>مدير المشاريع</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TeamDetails;
