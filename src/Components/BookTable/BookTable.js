import { isEmptyObject } from "jquery";
import React, { useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { resturants } from "../../utils/Context";
import sec1bg from "../../assets/img/gallery/section-bg1.jpg";
import { FiArrowLeft } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import one from "../../assets/img/Mr.Biggs_.png";
import SwiperCore, { Navigation } from "swiper";
import StarRating from "react-star-ratings";
import Header from "../Homepage/Header";
import Footer from "../Homepage/Footer";
import RestaurantSlider from "../../utils/RestaurantSlider";
import { ModalBox, useModal } from "../../utils/CustomComponents";
import BookTableModal from "./BookTableModal";
function ProtectBookTable() {
    const { selected } = useContext(resturants);
    return isEmptyObject(selected) ? (
        <Redirect to={""} />
    ) : (
        <>
            <Header sticky={true} />
            <BookTable selected={selected} />
            <Footer />
        </>
    );
}

export default ProtectBookTable;

SwiperCore.use([Navigation]);

function BookTable({ selected }) {
    const [show, setShow] = useModal();
    function formatAMPM(date) {
        var ampm = date >= 12 ? "PM" : "AM";
        date = date % 12;
        date = date ? date : 12;
        var strTime = date + ampm;
        return strTime;
    }
    return (
        <section
            className="book-table"
            style={{ background: `url(${sec1bg})`, padding: "100px 0" }}
        >
            <div className="container  px-4">
                <div className="row bar">
                    <div className="col-md-12">
                        <NavLink to="">
                            <FiArrowLeft size="4em" />
                            <h3>Home</h3>
                        </NavLink>
                    </div>
                </div>
                <div className="row mt-2 pictures-display">
                    <div className="col-md-12 px-0">
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={20}
                            navigation
                            style={{ overflow: "visible" }}
                        >
                            {selected.imgUrl.map((img, index) => {
                                return (
                                    <SwiperSlide key={index} style={{ width: "auto !important" }}>
                                        <img src={`${img === "" ? one : img}`} alt="" />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
                <div className=" row mt-3">
                    <div className="col-md-12">
                        <h1 className="name">{selected.name}</h1>
                    </div>
                    <div className="col-md-12 region data">
                        <h6>
                            <span>{selected.region}</span>{" "}
                            <StarRating
                                rating={selected.rating}
                                starRatedColor="#FFDF00"
                                numberOfStars={5}
                                starDimension={"18px"}
                                starSpacing={"0px"}
                                name="rating"
                            />
                        </h6>
                    </div>
                    <div className="col-md-12">
                        <p className="address mt-2">{selected.address}</p>
                    </div>
                    <div className="col-md-12 mt-3 descript data">
                        <h2>Description</h2>
                        <p className="mt-2">{selected.description}</p>
                    </div>
                    <div className="col-md-12 mt-3 tag_list ">
                        {selected.tags.map((tag, index) => {
                            return (
                                <div className="tag" key={index}>
                                    {tag}
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-md-12 mt-3 descript data">
                        <h2>
                            Opening Hours :{" "}
                            {formatAMPM(selected.openingHours.open) +
                                "-" +
                                formatAMPM(selected.openingHours.close)}
                        </h2>
                        <div className="mt-2"></div>
                    </div>
                    <div className="col-md-12 cta text-center mt-5 w-100">
                        <button
                            onClick={() => {
                                setShow(true);
                            }}
                        >
                            Book a Table
                        </button>
                    </div>
                    <div className="col-md-12 location mt-5 data w-100">
                        <h2 className="location">Location</h2>
                        <iframe
                            src={selected.gmap_iframe_location}
                            frameBorder="0"
                            title={selected.name + "" + selected.area}
                        ></iframe>
                    </div>
                    <div className="col-md-12 others mt-5 data">
                        <h2 className="location">Other Restaurants in {selected.region}</h2>
                        <OtherRestaurantsInRegion
                            selectedRegionStateid={selected.selectedStateid}
                            selected={selected}
                        />
                    </div>
                </div>
            </div>
            <ModalBox show={show} centered={true} size={"lg"}>
                <BookTableModal setShow={setShow} selected={selected} />
            </ModalBox>
        </section>
    );
}

function OtherRestaurantsInRegion({ selected }) {
    const { resturantList } = useContext(resturants);
    let index,
        slider = [];
    index = resturantList.findIndex((res) => {
        return res.id === selected.state;
    });
    resturantList[index].resturants.forEach((res) => {
        if (res.region === selected.region && res.id !== selected.id) {
            slider.push(res);
        }
    });
    return <RestaurantSlider array={slider} />;
}
