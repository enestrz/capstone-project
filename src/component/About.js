import React from "react";
import Restaurant1 from "../assets/images/restaurant.jpg";
import Restaurant2 from "../assets/images/restaurant2.jpg";

const About = () => {
    return (
        <section className="grid-container about-section">
            <div className="about-content">
                <div className="about-content-text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat duis
                        enim velit mollit.
                    </p>
                </div>
                <div className="about-content-images">
                    <img src={Restaurant1} alt="Little Lemon Restourant " />
                    <img src={Restaurant2} alt="Little Lemon Restourant " />
                </div>
            </div>
        </section>
    );
};

export default About;
