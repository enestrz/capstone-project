import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="grid-container hero-section">
            <div className="hero-container">
                <article className="hero-content">
                    <h2>Little Lemon</h2>
                    <h4>Chicago</h4>
                    <p>
                        We are family owned Mediterranean restaurant, focused on
                        tradinitional recipes served with a modern twist.
                    </p>
                    <Link to={"/booking"} role="button" className="link-button">
                        Reserve a Table
                    </Link>
                </article>
                <div>
                    <img
                        src={require("../assets/images/restauranfood.jpg")}
                        alt="Hero Section Restourant Food"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
