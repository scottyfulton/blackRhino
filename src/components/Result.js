import React from "react";
import "./NavBar.css";

export default function Result(props) {
    return (
        <div>
            <h2 className="jumboTY">Confirmed, thank you {props.userName}</h2>
        </div>
    );
}
