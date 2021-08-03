/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import logo from "../../assets/img/logo/logo.png";
import $ from "jquery";
import { NavLink } from "react-router-dom";
function Header({ sticky, waitlist }) {
    useEffect(() => {
        // eslint-disable-next-line no-undef
        $(window).scroll(() => {
            var scroll = $(window).scrollTop();
            if (scroll > 60) {
                $(".main-header").addClass("sticky-bar");
            } else {
                $(".main-header").removeClass("sticky-bar");
            }
        });
    }, []);
    return (
        <header>
            <div
                className="header-area header-transparent"
                style={{ background: `${sticky && "#fff4f2"}` }}
            >
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="menu-wrapper d-flex align-items-center justify-content-between">
                            <div className="left-content d-flex align-items-center">
                                <div className="logo">
                                    <NavLink
                                        to=""
                                        onClick={() => {
                                            $(window).scrollTop(0);
                                        }}
                                    >
                                        <img src={logo} alt="" />
                                    </NavLink>
                                </div>

                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <NavLink
                                                    to=""
                                                    onClick={() => {
                                                        $(window).scrollTop(0);
                                                    }}
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <a href="menu.html">Menu</a>
                                            </li>
                                            <li>
                                                <a href="about.html">About</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="blog.html">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog_details.html">Blog Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="elements.html">Element</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            {!waitlist && (
                                <div className="buttons">
                                    <ul>
                                        <NavLink
                                            to="/wait-list"
                                            onClick={() => {
                                                $(window).scrollTop(0);
                                            }}
                                        >
                                            <li className="button-header">
                                                <div className="btn header-btn2">
                                                    <i className="fas fa-phone-alt"></i>JOIN OUR
                                                    WAIT-LIST
                                                </div>
                                            </li>
                                        </NavLink>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
