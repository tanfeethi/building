import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import { motion } from 'framer-motion';
import useFetch from '../../hooks/UseFetch';
import { useTranslation } from 'react-i18next';

const TeamDetails = () => {
    const { t,i18n } = useTranslation(); // استخدام i18n للتبديل بين اللغات
    const [lang, setLang] = useState(localStorage.getItem("language") || "ar"); // اللغة المحفوظة
    const { data, loading, error } = useFetch("api/frontend/teams", {}, lang); // استخدام hook مع تغيير اللغة

    useEffect(() => {
        const storedLang = localStorage.getItem("language") || "ar";
        if (i18n.language !== storedLang) {
            i18n.changeLanguage(storedLang).then(() => {
                setLang(storedLang);
            });
        } else {
            setLang(storedLang); // Language was already correct
        }
    }, [i18n.language]);


    if (loading) return <div>{t('loading')}</div>;
    if (error) return <div className="text-red-500">{t('error')}: {error}</div>;

    const imageVariants = {
        hidden: { y: -140 },
        visible: { y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    };

    return (
        <Container>
            <div className='mt-[200px] my-5xl flex flex-row flex-wrap justify-between'>
                {data && Array.isArray(data) ? (
                    data.map((member, index) => (
                        <div key={index} className="space-s-7xl mb-[200px]">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={imageVariants}
                                className='flex relative'
                            >
                                <img
                                    src={member.image || 'default-person.png'}
                                    alt={member.name || t('defaultEngineer')}
                                    className="rounded-3xl w-36 h-auto absolute bottom-[-32px] left-48 z-0"
                                />

                                <div className='bg-text-grey-hover me-6xl w-12 h-16 flex justify-center items-end absolute bottom-10 z-10'>
                                    <div className='w-12 h-full bg-text-primary'></div>
                                    <div className='w-12 h-full bg-text-dark'></div>
                                </div>
                            </motion.div>

                            <div className='flex text-text-primary'>
                                <div className='bg-text-primary flex items-center justify-center w-12 h-20'
                                    style={{
                                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)",
                                    }}
                                >
                                </div>

                                <div
                                    className="bg-text-dark border border-e-4 border-opacity-10 border-text-grey flex items-center justify-center w-20 h-52"
                                    style={{
                                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 38%)",
                                    }}
                                >
                                </div>

                                <div className='flex bg-text-grey-hover text-text-dark w-80 flex-col py-3xl px-xl items-end z-20'>
                                    <h3 className='text-medium font-bold'>{member.name}</h3>
                                    <p className='text-small'>{member.position}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>{t('noTeamMembers')}</div>
                )}
            </div>
        </Container>
    );
};

export default TeamDetails;
