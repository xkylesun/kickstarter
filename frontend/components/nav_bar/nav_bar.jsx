import React from "react";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const userComp = Boolean(props.currentUserId) ? (
    <button onClick={props.logout}>Log out</button>
    ) : (
    <Link to="/login">Log in</Link>
    );
    console.dir(props)
    return (
        <div>
            NAV BAR
            <br></br>
            <Link to="/">Explore</Link>
            <Link to="/start">Start a project</Link>
            <Link to="/">Kickstarter</Link>
            <a href="#">Search</a>
            {userComp}
        </div>)
}

export default Navbar;