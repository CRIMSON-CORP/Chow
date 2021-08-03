import React, { useState, useEffect } from "react";
import { resturants } from "../utils/Context";

function ResturantsContext(props) {
    const [resturantList, setResturantsList] = useState({});
    const [selected, setSelected] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("/Chow/api.json")
            .then((data) => data.json())
            .then((data) => {
                setResturantsList(data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <resturants.Provider value={{ resturantList, selected, setSelected }}>
            {loading && props.children}
        </resturants.Provider>
    );
}

export default ResturantsContext;
