/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import s1 from "../../assets/img/icon/services1.svg";
import s2 from "../../assets/img/icon/services2.svg";
import s3 from "../../assets/img/icon/services3.svg";
function Services() {
    return (
        <div className="our-services section-padding position-relative">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-xl-7 col-lg-8 col-md-11">
                        <div className="section-tittle text-center mb-70">
                            <h2>Best way to eat healthy food</h2>
                            <p>
                                Making a reservation at Délicious restaurant is easy and takes just
                                a<br />
                                couple of minutes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-icon">
                                <img src={s1} alt="" />
                            </div>
                            <div className="services-cap">
                                <h5>
                                    <a href="#">Healthy Meal</a>
                                </h5>
                                <p>
                                    Making a reservation at Délicious restaurant is easy and takes
                                    just a couple of minutes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-icon">
                                <img src={s2} alt="" />
                            </div>
                            <div className="services-cap">
                                <h5>
                                    <a href="#">Fast Food</a>
                                </h5>
                                <p>
                                    Making a reservation at Délicious restaurant is easy and takes
                                    just a couple of minutes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-icon">
                                <img src={s3} alt="" />
                            </div>
                            <div className="services-cap">
                                <h5>
                                    <a href="#">Delicious Coffee</a>
                                </h5>
                                <p>
                                    Making a reservation at Délicious restaurant is easy and takes
                                    just a couple of minutes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
