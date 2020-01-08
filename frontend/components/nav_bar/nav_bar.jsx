import React from "react";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const userComp = Boolean(props.currentUserId) ? (
    <button onClick={props.logout}>Log out</button>
    ) : (
    <Link to="/login">Log in</Link>
    );
    // console.dir(props)
    return (
        <div id="navbar">
            NAV BAR
            <br></br>
            <ul className="nav-left">
                <Link to="/">Explore</Link>
                <Link to="/start">Start a project</Link>
            </ul>
            <Link to="/">Kickstarter</Link>
            <ul className="nav-right">
                <a href="#">Search</a>
                {userComp}
            </ul>
        </div>)
}

export default Navbar;