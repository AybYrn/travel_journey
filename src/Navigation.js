import React from "react";
import Logo from "./logo.png";

export default function Navigation(){
    return(
        <div className="navigation--bar">
            <div><img src={Logo} alt =""></img></div>
            <p className="bold">MY TRAVEL JOURNEY</p>
        </div>
    );
}