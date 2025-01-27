import React from 'react';

const Button = ({ name,className , style }) => {
    return (
        <button 
            className={className}
            style={{
                // width: "185px",
                // height: "56px",
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