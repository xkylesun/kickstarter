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
        <div id="navbar-frame">
            <br></br>
            <ul className="navbar nav-left">
                <Link to="/">Explore</Link>
                <Link to="/start">Start a project</Link>
            </ul>
            <Link to="/">Jumpstarter</Link>
            <ul className="navbar nav-right">
                <a href="#">Search</a>
                {userComp}
            </ul>
        </div>)
}

export default Navbar;