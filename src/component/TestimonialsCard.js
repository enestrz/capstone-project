import React from "react";
import { MdStarRate } from "react-icons/md";

const TestimonialsCard = ({ rating, imgSrc, name, reviewText }) => {
    return (
        <div className="testimonials-card">
            <h2>
                Rating {rating} <MdStarRate color="#f4ce14" fontSize={24} />
            </h2>
            <div className="testimonials-card-body">
                <img src={imgSrc} alt={name} />
                <span>{name}</span>
            </div>
            <p>{reviewText}</p>
        </div>
    );
};

export default TestimonialsCard;
