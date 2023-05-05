import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import Profile1 from "../assets/images/profile1.jpg";
import Profile2 from "../assets/images/profile2.jpg";
import Profile3 from "../assets/images/profile3.jpg";
import Profile4 from "../assets/images/profile4.jpg";

const testimonials = [
    {
        rating: 5,
        imgSrc: Profile1,
        name: "John",
        reviewText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        rating: 5,
        imgSrc: Profile3,
        name: "Elise",
        reviewText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        rating: 5,
        imgSrc: Profile2,
        name: "Michael",
        reviewText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        rating: 5,
        imgSrc: Profile4,
        name: "Alex",
        reviewText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const Testimonials = () => {
    return (
        <section className="grid-container testimonials-section">
            <div className="testimonials-content">
                <h2>Testimonials</h2>
                <div className="testimonials-body">
                    {testimonials.map((item, index) => (
                        <TestimonialsCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
