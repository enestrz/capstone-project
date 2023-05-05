import React from "react";
import FooterImage from "../assets/images/Mario and Adrian b.jpg";

const Footer = () => {
    return (
        <footer className="grid-container footer">
            <section className="footer-container">
                <div className="footer-image-wrapper">
                    <img src={FooterImage} alt="Mario and Adrian" />
                </div>
                <nav className="footer-nav">
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </nav>
                <nav className="footer-nav">
                    <h4>Contact</h4>
                    <ul>
                        <li>Adress</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </nav>
                <nav className="footer-nav">
                    <h4>Social Media Links</h4>
                    <ul>
                        <li>Adress</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </nav>
            </section>
        </footer>
    );
};

export default Footer;
