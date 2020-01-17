import React from "react";
import { Link } from 'react-router-dom';

const CategoryBar = (props) => {
    return (
        <div className="category-bar-frame">
            <ul className="category-list">
                <li><Link to="/discover/ref=category=arts">Arts<span className="cate-bottom-bar"></span></Link></li>
                <li><Link to="/discover/ref=category=comics">Comics</Link></li>
                <li><Link to="/discover/ref=category=design">Design</Link></li>
                <li><Link to="/discover/ref=category=games">Games</Link></li>
                <li><Link to="/discover/ref=category=music">Music</Link></li>
                <li><Link to="/discover/ref=category=photography">Photography</Link></li>
                <li><Link to="/discover/ref=category=technology">Technology</Link></li>
            </ul>
        </div>
    );
};

export default CategoryBar;
