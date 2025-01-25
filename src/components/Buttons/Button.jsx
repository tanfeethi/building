import React from 'react';

const Button = ({ name,className }) => {
    return (
        <button 
            className={className}
            style={{
                width: "185px",
                height: "56px",
                // border: "1px solid #1F69B3",
                // backgroundColor: "#1F69B3",
                // color: "white",
                borderRadius: "5px",
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