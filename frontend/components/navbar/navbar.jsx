import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./search_bar";
import { toggleShow } from "../../utils/other_utils";
import UserDropdown from "./user_dropdown";
import ExploreDropdown from "./explore_dropdown";


export default class Navbar extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let name = this.props.currentUser ? this.props.currentUser.name : null;
        if (!name && this.props.currentUser){
            this.props.fetchCurrentUser(this.props.currentUser)
        }
    }

    render() {
        let userComp;
        if (Boolean(this.props.currentUser)){
            userComp = (
                <UserDropdown logout={this.props.logout} avatar={this.props.currentUser.avatar}/>
            );
        } else {
            userComp = (
                <Link to="/login"><button className="nav-button">Log in</button></Link>
            )
        };
    
        return(
            <div id = "navbar-frame" >
                <SearchBar />
                <ExploreDropdown />
                <span className="nav-left">
                    <button className="nav-button" onClick={() => toggleShow("explore-dropdown")}>Explore</button>
                    {/* <ExploreDropdown /> */}
                    <Link to="/start"><button className="nav-button">Start a project</button></Link>
                </span>

                <span className="nav-center">
                    <Link to="/"><h1 id="nav-logo">Jumpstarter</h1></Link>
                </span>

                <span className="nav-right">
                    <button className="nav-button" onClick={() => toggleShow("search-bar")}>Search<i id="search-icon" className="fa fa-search"></i></button>
                    {userComp}
                </span>
            </div>
            )
    }
}
