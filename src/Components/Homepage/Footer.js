/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import footerLogo from "../../assets/img/logo/logo2_footer.png";
function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        <div className="footer-logo mb-35">
                                            <a href="index-2.html">
                                                <img src={footerLogo} alt="" />
                                            </a>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>
                                                    Land behold it created good saw after she'd Our
                                                    set living. Signs midst dominion creepeth
                                                    morning laboris nisi ufsit aliquip.
                                                </p>
                                            </div>

                                            <div className="footer-social">
                                                <a href="#">
                                                    <i className="fab fa-twitter-square"></i>
                                                </a>
                                                <a href="https://bit.ly/sai4ull">
                                                    <i className="fab fa-facebook-square"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-pinterest-square"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Quick Links</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Home</a>
                                            </li>
                                            <li>
                                                <a href="#">About</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-8 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Cakes</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Blackforest</a>
                                            </li>
                                            <li>
                                                <a href="#">Bodhubon</a>
                                            </li>
                                            <li>
                                                <a href="#">Rongdhonu</a>
                                            </li>
                                            <li>
                                                <a href="#">Meghrong</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle mb-20">
                                        <h4>Contact Us</h4>
                                        <p>76/A, Green Lane, Dhanmondi, NYC</p>
                                    </div>
                                    <ul className="mb-20">
                                        <li className="number">
                                            <a href="#">+10 (78) 738-9083</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-copy-right text-center">
                                        Copyright &copy;
                                        {new Date().getFullYear()} All rights reserved | This
                                        template is made with{" "}
                                        <i
                                            className="fa fa-heart color-danger"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        by
                                        <a
                                            href="https://colorlib.com/"
                                            style={{ color: "black" }}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            HubFuse
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
