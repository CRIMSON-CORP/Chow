/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import sec1bg from "../../assets/img/gallery/section-bg1.jpg";
import { resturants } from "../../utils/Context";
import RestaurantSlider from "../../utils/RestaurantSlider";
function Resturants() {
    const { resturantList } = useContext(resturants);
    useEffect(() => {
        document.querySelector(".nav-link.active") === null &&
            document.querySelector(".nav-link").classList.add("active");
        document.querySelector("span.indicator").style.left =
            document.querySelector(".nav-link.active").offsetLeft + "px";
        document.querySelector("span.indicator").style.width = getComputedStyle(
            document.querySelector(".nav-link.active")
        ).width;
    }, []);

    const citiesJSX = resturantList.map((state, index) => {
        return (
            <NavLink
                key={index}
                exact
                to={"/Chow/" + state.name.toLowerCase()}
                className="nav-link"
                id="nav-two-tab"
                activeClassName="active"
                onClick={(e) => {
                    document.querySelector("span.indicator").style.left =
                        e.target.offsetLeft + "px";
                    document.querySelector("span.indicator").style.width = getComputedStyle(
                        document.querySelectorAll(".nav-link")[index]
                    ).width;
                }}
            >
                {state.name}
            </NavLink>
        );
    });

    SwiperCore.use([Navigation, Autoplay]);

    const SliderJSX = resturantList.map((state, index) => {
        return (
            <Route
                key={index}
                path={[
                    `/Chow/${index === 0 ? "" : state.name.toLowerCase()}`,
                    `/Chow/${state.name.toLowerCase()}`,
                ]}
                exact
            >
                <RestaurantSlider array={state.resturants} state={state} />
            </Route>
        );
    });

    return (
        <section
            className="our-client section-padding section-img-bg2"
            style={{ background: `url(${sec1bg})` }}
        >
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="section-tittle section-tittle2 mb-30">
                            <h2>Most Popular Restuarants in Nigeria</h2>
                            <p>
                                Making a reservation at Délicious restaurant is easy and takes just
                                a couple of minutes.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <a href="#" className="btn full-menu f-right">
                            All Restuarants
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="nav-button mb-40">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <span className="indicator"></span>
                                    {citiesJSX}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-one"
                        role="tabpanel"
                        aria-labelledby="nav-one-tab"
                    >
                        <div className="items-active">{SliderJSX}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resturants;
