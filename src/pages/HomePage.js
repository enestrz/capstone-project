import React from "react";
import Main from "../component/Main";
import HeroSection from "../component/HeroSection";
import Specials from "../component/Specials";
import Testimonials from "../component/Testimonials";
import About from "../component/About";

const HomePage = () => {
    return (
        <Main>
            <HeroSection />
            <Specials />
            <Testimonials />
            <About />
        </Main>
    );
};

export default HomePage;
