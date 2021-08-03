import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import { DropDown } from "../../utils/CustomComponents";
import $ from "jquery";
function BookTableModal({ setShow, selected }) {
    const [data, setData] = useState({
        guests: 2,
        date: "Today",
        time: "",
    });
    const [activePage, setActivePage] = useState("table");
    const [calcHeight, setCalcHeight] = useState();

    useEffect(() => {
        document.querySelector(".modal-content").style.height = calcHeight + 113 + "px";
    }, [calcHeight]);

    function calcHeightStyle(el) {
        setCalcHeight(el.offsetHeight);
    }

    return (
        <div className="p-0 p-md-3 modal-form form-wrapper">
            <MdClose size="2em" onClick={() => setShow(false)} className="closeModal" />
            <h1 className="text-center">{selected.name}</h1>
            <hr className="my-3" />
            <CSSTransition
                in={activePage === "table"}
                unmountOnExit
                timeout={500}
                classNames="table"
                onEnter={calcHeightStyle}
            >
                <TableData
                    setData={setData}
                    selected={selected}
                    data={data}
                    setActivePage={setActivePage}
                    setCalcHeight={setCalcHeight}
                />
            </CSSTransition>
            <CSSTransition
                in={activePage === "person"}
                unmountOnExit
                timeout={500}
                classNames="person"
                onEnter={calcHeightStyle}
            >
                <PersonalData data={data} setActivePage={setActivePage} />
            </CSSTransition>
        </div>
    );
}

export default BookTableModal;

function TableData({ setData, selected, data, setActivePage, setCalcHeight }) {
    const table = useRef();
    const [min, setMin] = useState(
        data.date !== "Today" ? selected.openingHours.open + ":00" : minSetter()
    );
    const form = useRef();
    useEffect(() => {
        setCalcHeight(table.current.offsetHeight);
    }, [setCalcHeight]);
    useEffect(() => {
        setMin(data.date !== "Today" ? selected.openingHours.open + ":00" : minSetter());
    }, [data.date, selected.openingHours.open]);

    function selectGuest(val) {
        setData((prev) => {
            return { ...prev, guests: val };
        });
    }
    function selectDate(val) {
        setData((prev) => {
            return { ...prev, date: val };
        });
    }

    const countArr = [];
    for (let index = 1; index <= selected.maxNoGuests; index++) {
        countArr.push(index);
    }

    function minSetter() {
        var d = new Date();
        var hour = d.getHours();
        var minute = d.getMinutes();
        if (minute >= 0 && minute <= 29) {
            minute = 30;
        } else if (minute >= 30) {
            minute = 0;
            hour = hour + 1;
        }
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        let time = `${hour}:${minute}`;
        return time;
    }
    setInterval(() => {
        setMin(data.date !== "Today" ? selected.openingHours.open + ":00" : minSetter());
    }, 60000);
    return (
        <section className="table-data" ref={table}>
            <div className="container py-0 py-md-5">
                <form
                    ref={form}
                    onSubmit={(e) => {
                        e.preventDefault();
                        setActivePage("person");
                    }}
                >
                    <div className="row">
                        <div className="col-md-3 feild">
                            <p>Guests</p>
                            <DropDown
                                width="100%"
                                dropListArray={countArr}
                                initialOption={data.guests.toString()}
                                removeOnExit
                                timeout={400}
                                setOption={selectGuest}
                            />
                        </div>
                        <div className="col-md-6 feild">
                            <p>Date</p>
                            <DropDown
                                width="100%"
                                dropListArray={makeDateList(new Date().getTime())}
                                initialOption={data.date.toString()}
                                removeOnExit
                                timeout={400}
                                setOption={selectDate}
                            />
                        </div>
                        <div className="col-md-3 feild">
                            <p>Time</p>
                            <input
                                type="time"
                                min={min}
                                max={`${selected.openingHours.close}:00`}
                                className="time"
                                step={1800}
                                value={data.time}
                                onChange={(e) => {
                                    setData((prev) => {
                                        return { ...prev, time: e.target.value };
                                    });
                                }}
                                required={true}
                            />
                        </div>
                    </div>
                    <button
                        className="submit continue"
                        type="submit"
                        disabled={data.time ? false : true}
                    >
                        Continue
                    </button>
                </form>
            </div>
        </section>
    );
}

function PersonalData({ data, setActivePage }) {
    function formatAMPM(date) {
        var hour = date[0] + date[1],
            minute = date[3] + date[4];
        minute = +minute;
        hour = +hour;
        var ampm = hour >= 12 ? "PM" : "AM";
        hour = hour >= 12 ? hour % 12 : hour;
        var strTime = hour + ":" + minute + " " + ampm;
        console.log(strTime);
        return strTime;
    }
    const [pData, setPData] = useState({});
    function setData(e) {
        setPData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }
    return (
        <Form className="personal-data">
            <div className="container">
                <h3>Reservation Details</h3>
                <p>
                    {data.date} at {formatAMPM(data.time)}
                </p>
                <p>{data.guests} guests</p>
            </div>
            <div className="container pb-5 pt-2">
                <h3>Personal Details</h3>
                <div className="row">
                    <div className="col-md-6">
                        <InputBoxGen
                            header={"First name"}
                            name={"firstname"}
                            type={"text"}
                            placeholder={"John"}
                            change={setData}
                        />
                    </div>
                    <div className="col-md-6">
                        <InputBoxGen
                            header={"Last name"}
                            name={"lastname"}
                            type={"text"}
                            placeholder={"Doe"}
                            change={setData}
                        />
                    </div>
                    <div className="col-md-12">
                        <InputBoxGen
                            header={"Phone number"}
                            name={"phone_number"}
                            type={"tel"}
                            placeholder={"08012345678"}
                            change={setData}
                        />
                    </div>
                    <div className="col-md-12">
                        <InputBoxGen
                            header={"Email"}
                            name={"email"}
                            type={"email"}
                            placeholder={"example@email.com"}
                            change={setData}
                        />
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12 ">
                        <button className="main  continue " type="submit">
                            submit
                        </button>
                    </div>
                    <div className="col-md-12 mt-3 ">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                $(".form-wrapper").scrollTop(0);
                                setActivePage("table");
                            }}
                        >
                            Go back
                        </button>
                    </div>
                </div>
            </div>
        </Form>
    );
}

function InputBoxGen({ header, type, name, placeholder, change }) {
    return (
        <div className="input_wrapper text-left">
            <h5 className="text-white">{header}</h5>
            <Form.Group className="mt-3">
                <Form.Control
                    type={type}
                    name={name}
                    autoComplete="off"
                    onChange={change}
                    required={true}
                />
                <Form.Label htmlFor={name}>{placeholder}</Form.Label>
            </Form.Group>
        </div>
    );
}

function makeDateList(date) {
    const day = 8.64e7,
        count = 8,
        arr = ["Today", "Tomorrow"];

    for (let index = 0; index < count; index++) {
        date = date + day;
        arr.push(new Date(date).toDateString());
    }
    return arr;
}
