import React from "react";
import { withRouter } from "react-router";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e){
        if (e.key === "Enter"){
            let searchTerm = e.currentTarget.value.toLowerCase().replace(" ","%20");
            this.props.history.push(`/discover/ref=search&term=${searchTerm}`);
        }
    }

    toggleHidden(){
        document.getElementById("search-bar").classList.add("hidden");
    }

    render() {
        return (
            <div className="hidden" id="search-bar">
                <div id="search-container">
                    <input 
                        id="search-input" 
                        type="text" 
                        placeholder="Search for projects or categories"
                        onKeyPress={this.handleSearch}/>
                    <button id="search-close-btn" onClick={this.toggleHidden}>
                        <i className="fa fa-close"></i>
                    </button>
                </div>
            </div>
        );
    };
} 

export default withRouter(SearchBar);