import React from "react";
import { Redirect } from "react-router-dom";

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e){
        console.dir(this.props)
        // if (e.key === "Enter"){
        //     this.props.history.push(`/ref=search&term=${e.currentTarget.value}`);
        // }
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    className="search-input" 
                    type="text" 
                    placeholder="Search for projects or categories"
                    onKeyPress={this.handleSearch}/>
                <button className="search-close-btn"><i className="fa fa-close"></i></button>
            </div>
        );
    };
} 
