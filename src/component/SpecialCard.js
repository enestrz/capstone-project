import React from "react";
import { Link } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";

const SpecialCard = ({ imgSrc, title, price, text, link }) => {
    return (
        <section className="card-container">
            <img src={imgSrc} alt={title} />
            <article className="card-body">
                <header>
                    <h5>{title}</h5> <span>${price}</span>
                </header>
                <p className="card-text">{text}</p>
            </article>
            <Link to={link}>
                Order a delivery <MdDeliveryDining />
            </Link>
        </section>
    );
};

export default SpecialCard;
