import React from 'react'

const Container = ({ image, title, description }) => {
    return (
        <div>
            <img src={image} alt={image} />
            <h1>{title}</h1>
            <h1>{description}</h1>
        </div>
    )
}

export default Container