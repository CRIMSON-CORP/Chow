/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import hero_1 from "../../assets/img/hero/h1_hero1.jpg";
import tes from "../../assets/img/gallery/xuser.jpg.pagespeed.ic.gIEmGi_971.jpg";
function Hero() {
    return (
        <div className="slider-area slider-height">
            <div className="slider-active">
                <div className="single-slider">
                    <div className="slider-cap-wrapper">
                        <div className="hero-caption">
                            <h1 data-animation="fadeInUp" data-delay=".2s">
                                Meet, Eat & Enjoy the true test
                            </h1>
                            <p data-animation="fadeInUp" data-delay=".6s">
                                Making a reservation at Délicious restaurant is easy and takes just
                                a couple of minutes.
                            </p>

                            <div className="slider-btns">
                                <a
                                    data-animation="fadeInLeft"
                                    data-delay="1.0s"
                                    href="#"
                                    className="btn hero-btn mr-15"
                                >
                                    Our Menu
                                </a>
                            </div>
                        </div>
                        <div className="hero-img position-relative">
                            <img
                                src={hero_1}
                                alt=""
                                data-animation="fadeInRight"
                                data-transition-duration="5s"
                            />

                            <div
                                className="ratting-point"
                                data-animation="bounceIn"
                                data-delay="1s"
                            >
                                <div className="features-ratting">
                                    <img src={tes} alt="" />
                                </div>
                                <div className="features-caption">
                                    <h3>"Délicious restaurant is easy and takes just a couple.</h3>
                                    <div className="rating">
                                        <ul>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <p>- Robert</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
