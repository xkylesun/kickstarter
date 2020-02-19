import React from "react";
import { withRouter } from "react-router";
import { toggleShow, toggleHide } from "../../utils/other_utils";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e){
        if (e.key === "Enter"){
            let searchTerm = e.currentTarget.value.toLowerCase().replace(" ","%20");
            e.currentTarget.value="";
            toggleHide("search-bar");
            this.props.history.push(`/discover/ref=search&term=${searchTerm}`);
        }
    }

    // toggleHidden(){
    //     document.getElementById("search-bar").classList.add("hidden");
    // }

    render() {
        return (
            <div className="search-bar" id="search-bar">
                <div id="search-container">
                    <input 
                        id="search-input" 
                        type="text" 
                        placeholder="Search for projects or categories"
                        onKeyPress={this.handleSearch}/>
                    <button id="search-close-btn" onClick={() => toggleHide("search-bar")}>
                        <i className="fa fa-close"></i>
                    </button>
                </div>
            </div>
        );
    };
} 

export default withRouter(SearchBar);