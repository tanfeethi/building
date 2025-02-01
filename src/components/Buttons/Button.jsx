import React from 'react';

const Button = ({ name,className }) => {
    return (
        <button 
            className={className}
            style={{
                fontSize: "18px",
                fontWeight: "bold",
                boxShadow: "0 4px 4px rgba(163, 163, 163, 0.4)",
            }}
        >
            {name}
        </button>
    );
}

export default Button;