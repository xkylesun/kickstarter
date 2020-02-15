import React from 'react';
import { Link } from 'react-router-dom';
import { toggleShow, toggleHide } from "../../utils/other_utils";

export default class UserDropdown extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount(){
        $(document).mouseup(e => {
            if (document.getElementById("user-dropdown")){
                if (!e.target.closest("#user-dropdown")){
                    toggleHide("user-dropdown")
                }
            }
        });
    };

    render() {
        return (
            <div>
                <div className="avatar-container" onClick={() => toggleShow("user-dropdown")}>
                    <img className="nav-avatar" src={this.props.avatar} />
                </div>
                <div id="user-dropdown" className="user-dropdown">
                    <div className="dropdown-container">
                        <h1 className="dropdown-title">YOUR ACCOUNT</h1>
                        <ul 
                            onClick={() => toggleHide("user-dropdown")}
                            className="dropdown-item-list">
                            <li className="dropdown-btn"><Link to="/profile/">Profile</Link></li>
                            <li className="dropdown-btn"><Link to="/profile/projects">Created projects</Link></li>
                        </ul>
                    </div>
                        <button className="logout-btn" onClick={this.props.logout}>Log out</button>
                </div>
            </div>
        );
    };
};