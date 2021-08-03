import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { IoRestaurant } from "react-icons/io5";
import { BiUser } from "react-icons/all";
import { CSSTransition } from "react-transition-group";
import { Form } from "react-bootstrap";
import sec1bg from "../../assets/img/gallery/section-bg1.jpg";
import $ from "jquery";
function WaitingList() {
    return (
        <>
            <Header waitlist={true} sticky={true} />
            <FormBox />
            <Footer />
        </>
    );
}

export default WaitingList;

function FormBox() {
    const [triggers, setTriggers] = useState({
        res: false,
        ind: false,
    });
    const [resformData, setresformData] = useState({});

    function setData({ target: { name, value } }) {
        setresformData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    return (
        <section
            className="waitlist-form"
            style={{ background: `url(${sec1bg})`, padding: "150px 0 100px" }}
        >
            <div className="container text-center ">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-white">Thank you for Joining our Wait-List!</h1>
                    </div>
                    <CSSTransition
                        in={!triggers.res && !triggers.ind}
                        unmountOnExit
                        timeout={0}
                        classNames={"enter"}
                    >
                        <>
                            <div className="col-md-12">
                                <p className="mt-3 text-white">
                                    Wait as a Restaurant or an Individual
                                </p>
                            </div>
                            <div className="activators col-md-8 mx-auto text-center mt-4">
                                <div className="row gap-card">
                                    <div className="col-md-6">
                                        <div
                                            className="card res mx-auto"
                                            onClick={() => {
                                                setTriggers((prev) => {
                                                    return { ...prev, res: true };
                                                });
                                            }}
                                        >
                                            <IoRestaurant size="3.5rem" />
                                            <p>Restaurant</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-md-0 mt-4">
                                        <div
                                            className="card ind mx-auto"
                                            onClick={() => {
                                                setTriggers((prev) => {
                                                    return { ...prev, ind: true };
                                                });
                                            }}
                                        >
                                            <BiUser size="3.5rem" />
                                            <p>Individual</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    </CSSTransition>
                    <CSSTransition in={triggers.res} unmountOnExit timeout={0} classNames={"enter"}>
                        <>
                            <div className="col-md-12">
                                <p className="mt-3 text-white">Wait as a Restaurant </p>
                            </div>
                            <Form>
                                <InputBoxGen
                                    header={"First name"}
                                    name={"firstname"}
                                    type={"text"}
                                    placeholder={"John"}
                                    change={setData}
                                />
                                <InputBoxGen
                                    header={"Last name"}
                                    name={"lastname"}
                                    type={"text"}
                                    placeholder={"Doe"}
                                    change={setData}
                                />
                                <InputBoxGen
                                    header={"Phone number"}
                                    name={"phone_number"}
                                    type={"tel"}
                                    placeholder={"08012345678"}
                                    change={setData}
                                />
                                <InputBoxGen
                                    header={"Email"}
                                    name={"email"}
                                    type={"email"}
                                    placeholder={"example@email.com"}
                                    change={setData}
                                />
                                <InputBoxGen
                                    header={"Restaurant name"}
                                    name={"res_name"}
                                    type={"text"}
                                    placeholder={"Mr Biggs"}
                                    change={setData}
                                />
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <button className="main " type="submit">
                                            submit
                                        </button>
                                    </div>
                                    <div className="col-md-12 mt-3 ">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setTriggers((prev) => {
                                                    return { ...prev, res: false };
                                                });
                                                $(window).scrollTop($(window).scrollTop() - 600);
                                            }}
                                        >
                                            Go back
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </>
                    </CSSTransition>
                    <CSSTransition in={triggers.ind} unmountOnExit timeout={0} classNames={"enter"}>
                        <>
                            <div className="col-md-12">
                                <p className="mt-3 text-white">Wait as a an Individual</p>
                            </div>
                            <Form>
                                <InputBoxGen
                                    header={"First name"}
                                    name={"firstname"}
                                    type={"text"}
                                    placeholder={"John"}
                                    change={setData}
                                />
                                <InputBoxGen
                                    header={"Last name"}
                                    name={"lastname"}
                                    type={"text"}
                                    placeholder={"Doe"}
                                    change={setData}
                                />
                                <InputBoxGen
                                    header={"Phone number"}
                                    name={"phone_number"}
                                    type={"tel"}
                                    placeholder={"08012345678"}
                                    change={setData}
                                />
                                <InputBoxGen
                                    header={"Email"}
                                    name={"email"}
                                    type={"email"}
                                    placeholder={"example@email.com"}
                                    change={setData}
                                />
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <button className="main " type="submit">
                                            submit
                                        </button>
                                    </div>
                                    <div className="col-md-12 mt-3 ">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setTriggers((prev) => {
                                                    return { ...prev, ind: false };
                                                });
                                                $(window).scrollTop($(window).scrollTop() - 600);
                                            }}
                                        >
                                            Go back
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </>
                    </CSSTransition>
                </div>
            </div>
        </section>
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
