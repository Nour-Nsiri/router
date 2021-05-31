import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <div>
            <ul>
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <Link to="/about">
                    <li>ABOUT</li>
                </Link>
                <Link to="/movies">
                    <li>MOVIES</li>
                </Link>
                <Link to="/users">
                    <li>USERS</li>
                </Link>
            </ul>
        </div>
    );
};

export default Navigation;