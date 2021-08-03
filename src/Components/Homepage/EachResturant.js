import React, { useContext } from "react";
import StarRating from "react-star-ratings";
import one from "../../assets/img/Mr.Biggs_.png";
import { NavLink } from "react-router-dom";
import { resturants } from "../../utils/Context";
import $ from "jquery";
function EachResturant({ restuarant, state }) {
    const { setSelected } = useContext(resturants);
    function trim(text, length) {
        return text.substr(0, length) + "...";
    }
    return (
        <div className="single-cat text-left p-0 shadow">
            <div className="cat-img">
                <img src={one} alt="" />
            </div>
            <div className="cat-cap p-4 d-flex flex-column justify-content-between">
                <div>
                    <h5>{restuarant.name}</h5>
                    <h6>
                        {restuarant.region}{" "}
                        <StarRating
                            rating={restuarant.rating}
                            starRatedColor="#FFDF00"
                            numberOfStars={5}
                            starDimension={"15px"}
                            starSpacing={"0px"}
                            name="rating"
                        />
                    </h6>
                    <p className="address d-block">{restuarant.address}</p>
                    <p className="descript">{trim(restuarant.description, 100)}</p>
                </div>
                <NavLink
                    to="/booktable"
                    className="browse-btn"
                    onClick={() => {
                        setSelected(restuarant);
                        $(window).scrollTop(0);
                    }}
                >
                    Book a Table
                </NavLink>
            </div>
        </div>
    );
}

export default EachResturant;
