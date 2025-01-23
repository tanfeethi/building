import React from 'react'

const Card = ({ image, name, title, description }) => {
    return (
        <div>
            <img src={image} alt={image} />
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card;