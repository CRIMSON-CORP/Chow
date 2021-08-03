import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import EachResturant from "../Components/Homepage/EachResturant";
function RestaurantSlider({ array, spaceBetween, slidesPerView, style, state }) {
    SwiperCore.use(Navigation);
    return (
        <Swiper slidesPerView={"auto"} spaceBetween={20} navigation style={style}>
            {array.length === 0 ? (
                <h1 className="text-center no-match">No Matching Restaurants</h1>
            ) : (
                array.map((restuarant, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            className="col-lg-4 col-md-6 col-sm-6 restuarant  showAnim"
                        >
                            <EachResturant restuarant={restuarant} state={state} />
                        </SwiperSlide>
                    );
                })
            )}
        </Swiper>
    );
}

export default RestaurantSlider;
