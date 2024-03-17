import React from "react";
import "./css/Button1.css";

const Button1 = (props) => {
    const btnStyle = {
        color: props.color,
        backgroundColor: props.bgcolor,
    };

    return (
        <>
            <button style={btnStyle}>{ props.text }</button>
        </>
    );
};

export default Button1;