import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Resturants from "./Resturants";
import Services from "./Services";

function Homepage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <Resturants />
                <Footer />
            </main>
        </>
    );
}

export default Homepage;
