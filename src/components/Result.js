import React from "react";
import "./NavBar.css";

export default function Result(props) {
    return (
        <div>
            <h1 className="jumboTY">Confirmed, thank you {props.userName}!</h1>
        </div>
    );
}
