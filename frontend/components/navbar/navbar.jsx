import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./search_bar";

const Navbar = (props) => {
    const userComp = Boolean(props.currentUserId) ? (
    <button className="nav-button" onClick={props.logout}>Log out</button>
    ) : (
        <Link to="/login"><button className="nav-button">Log in</button></Link>
    );
    return (
        <div id="navbar-frame">
            <span className="nav-left">
                <Link to="/"><button className="nav-button">Explore</button></Link>
                <Link to="/start"><button className="nav-button">Start a project</button></Link>
            </span>
            <span className="nav-center"><Link to="/"><h1 id="nav-logo">Jumpstarter</h1></Link></span>
            <span className="nav-right">
                <a href="#"><button className="nav-button">Search<i id="search-icon" className="fa fa-search"></i></button></a>
                {userComp}
            </span>
            <SearchBar history={props.history}/>

        </div>)
}

export default Navbar;