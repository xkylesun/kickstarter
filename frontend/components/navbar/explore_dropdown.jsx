import React from 'react';
import { Link } from 'react-router-dom';
import { toggleHide } from "../../utils/other_utils";

export default class ExploreDropdown extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <div className="explore-dropdown" id="explore-dropdown">
                    <div className="ex-dropdown-container">
                        <div className="ex-close-container">
                            <h1 className="ex-dropdown-title">Categories</h1>
                            <button className="ex-close-btn" onClick={() => toggleHide("explore-dropdown")}><i className="fa fa-close"></i></button>
                        </div>
                        <ul className="ex-dropdown-item-list">
                            <li><Link to="/discover/ref=category=arts">Arts</Link></li>
                            <li><Link to="/discover/ref=category=comics">Comics</Link></li>
                            <li><Link to="/discover/ref=category=design">Design</Link></li>
                            <li><Link to="/discover/ref=category=games">Games</Link></li>
                            <li><Link to="/discover/ref=category=music">Music</Link></li>
                            <li><Link to="/discover/ref=category=photography">Photography</Link></li>
                            <li><Link to="/discover/ref=category=technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
};