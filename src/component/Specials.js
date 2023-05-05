import React from "react";
import { Link } from "react-router-dom";
import SpecialCard from "./SpecialCard";
import GreekSalad from "../assets/images/greek salad.jpg";
import Bruschetta from "../assets/images/bruchetta.svg";
import LemonDesert from "../assets/images/lemon dessert.jpg";

const specials = [
    {
        imgSrc: GreekSalad,
        title: "Greek Salad",
        price: 12.99,
        text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        link: "#",
    },
    {
        imgSrc: Bruschetta,
        title: "Bruchetta",
        price: 5.99,
        text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        link: "#",
    },
    {
        imgSrc: LemonDesert,
        title: "Lemon Dessert",
        price: 5,
        text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        link: "#",
    },
];

const Specials = () => {
    return (
        <section className="grid-container specials-container">
            <header className="specials-header">
                <h2>This week specials!</h2>
                <Link to={"#"} role="button" className="link-button">
                    Online Menu
                </Link>
            </header>
            <div className="specials-content">
                {specials.map((special, index) => (
                    <SpecialCard key={index} {...special} />
                ))}
            </div>
        </section>
    );
};

export default Specials;
