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
                        <ul className="dropdown-item-list">
                            <li>Not Dead Links</li>
                            <li>Just Placeholders</li>
                            <li>to Hide</li>
                            <li>Logout</li>
                            <li>Button</li>
                            <li>:)</li>
                        </ul>
                    </div>
                        <button className="logout-btn" onClick={this.props.logout}>Log out</button>
                </div>
            </div>
        );
    };
};