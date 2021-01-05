import React from "react";
// import Image from "../Images/"
import "./header.css";

const Header = () => {
    return (
        <>
            <h1 className="title">Ravenous</h1>
            <div className="headerPic">
                <div id="navwrap">
                    <div className="nav">
                            <h2>Best<br/>Match</h2>
                            </div>
                        <div className="nav">
                            <h2>Highest<br/>Rated</h2>
                        </div>
                        <div className="nav">
                            <h2>Most<br/>Reviewed</h2>
                        </div>
                    </div>
                <input className="search" type="text" placeholder="sushi-type" />
                <input className="search" type="text" placeholder="location" />
            </div>
        </>
    );
};

export default Header;
