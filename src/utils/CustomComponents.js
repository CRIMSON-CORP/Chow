import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { MdKeyboardArrowDown } from "react-icons/md";
import OnOutsideClick from "react-outclick";
import { Modal } from "react-bootstrap";

export function useModal() {
    const [show, setShow] = useState(false);

    function toggle() {
        setShow(!show);
    }

    return [show, toggle];
}

export function DropDown({
    timeout = 400,
    removeOnExit = true,
    header,
    dropListArray = [],
    setOption,
    customClassNames,
    initialOption,
    placeHolder,
    width,
    valid,
}) {
    const [drop, setDrop] = useState(false);

    useEffect(() => {
        return function () {
            setDrop(false);
        };
    }, []);

    var list = dropListArray.map((graph, index) => {
        return (
            <li
                key={index}
                className="list-group-item p-2"
                onClick={() => {
                    setOption(graph);
                    setDrop(false);
                }}
            >
                {graph}
            </li>
        );
    });

    return (
        <OnOutsideClick
            onOutsideClick={() => {
                setDrop(false);
            }}
        >
            <div className={`drop_down_wrapper ${drop ? "drop" : ""}`}>
                <div
                    className={` dropDown d-flex align-items-center justify-content-between ${
                        customClassNames && customClassNames
                    }`}
                    onClick={() => {
                        setDrop(!drop);
                    }}
                >
                    {placeHolder || initialOption}
                    <span>
                        <MdKeyboardArrowDown size="1.4rem" />
                    </span>
                </div>
                <CSSTransition
                    in={drop}
                    timeout={timeout}
                    classNames="drop"
                    unmountOnExit={removeOnExit}
                >
                    <div
                        className="card drop-down shadow rounded-0 p-0"
                        style={{ width: width || 100 }}
                    >
                        {header && <div className="card-header p-3 font-weight-bold">{header}</div>}

                        <div className="card-body">
                            <ul className="list-group">{list}</ul>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        </OnOutsideClick>
    );
}

export function Button({ type, toggle, text, execute, customClassNames }) {
    return (
        <button
            className={`${customClassNames} custum_btn ${toggle ? "disabled" : "enabled"}`}
            type={type}
            disabled={toggle}
            onClick={execute}
        >
            <span className="font-weight-bold text-center text-uppercase">{text}</span>
        </button>
    );
}

export function ModalBox({ show, handleModal, children, centered, size }) {
    return (
        <>
            <Modal
                show={show}
                centered={centered}
                onHide={handleModal}
                size={size}
                backdrop="static"
            >
                {children}
            </Modal>
        </>
    );
}

export function ModalRestuarant(props) {
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleModal}
                backdrop="static"
                size="lg"
                centered={true}
            >
                <div className="p-4 subCard-container justify-content-between flex-wrap">
                    {props.children}
                </div>
            </Modal>
        </>
    );
}

DropDown.propTypes = {
    timeout: PropTypes.number,
    removeOnExit: PropTypes.bool,
    header: PropTypes.string,
    placeHolder: PropTypes.string,
    dropListArray: PropTypes.array.isRequired,
    setOption: PropTypes.func.isRequired,
    initialOption: PropTypes.string.isRequired,
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    toggle: PropTypes.bool,
    text: PropTypes.string.isRequired,
    execute: PropTypes.func,
    customClassNames: PropTypes.string,
};
