import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="mx-6xl xl:mx-4xl lg:mx-2xl md:mx-xl sm:mx-m">
            {children}
        </div>
    );
};

export default Container;
