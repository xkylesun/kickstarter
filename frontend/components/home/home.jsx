import React from "react";
import { Link } from 'react-router-dom';
import {Featured, Recommended} from "./home_projects" 

export default class Discover extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            page: 1
        }
        this.pageUp = this.pageUp.bind(this);
        this.pageDown = this.pageDown.bind(this);
    }

    componentDidMount(){
        this.props.fetchProjects({limit: 10})
    }

    handleShift(num) {
        return () => this.setState({ page: num })
    }

    pageUp() {
        if (this.state.page < 3){
            // document.getElementById("slide-up").classList.remove("grayed-out")
            this.setState({ page: this.state.page + 1 })
        } 
    }

    pageDown(){
        if (this.state.page > 1) {
            this.setState({ page: this.state.page - 1 })
        }
    }

    render(){
        if (!this.props.featured) {
            return null;
        } else {
            const endIdx = this.state.page * 3;
            const startIdx = endIdx - 3;
            const currentList = this.props.recommended.slice(startIdx, endIdx)
            const slideShow = currentList.map(project => (
                        <li key={project.id}>
                            <Link to={`/projects/${project.id}`}>
                                <Recommended project={project} creator={this.props.users[project.creatorId]}/>
                            </Link>
                        </li>
                    ));

            return (
                <div className="home-frame">
                    <div className="home-projects-frame">
                        <div className="home-featured-frame">
                            <h1 className="home-title">FEATURED PROJECT</h1>
                            <Link to={`/projects/${this.props.featured.id}`}>
                                <Featured 
                                    project={this.props.featured} 
                                    creator={this.props.users[this.props.featured.creatorId]}/>
                            </Link>
                        </div>
                        <div className="home-rec-frame">
                            <h1 className="home-title">RECOMMENDED</h1>
                            <ul className="home-rec-items">
                                {slideShow}
                            </ul>
                            <span className="slide-show-container">
                                <ul className="slide-show">
                                    <li 
                                        id="slide-down" 
                                        className={this.state.page === 1 ? "grayed-out" : ""} 
                                        onClick={this.pageDown}>
                                        <i className="fa fa-angle-left"></i>
                                    </li>
                                    <li className={this.state.page === 1 ? "slide-selected" : ""} onClick={this.handleShift(1)} >1</li>
                                    <li className={this.state.page === 2 ? "slide-selected" : ""} onClick={this.handleShift(2)} >2</li>
                                    <li className={this.state.page === 3 ? "slide-selected" : ""} onClick={this.handleShift(3)} >3</li>
                                    <li 
                                        id="slide-up" 
                                        className={this.state.page === 3 ? "grayed-out" : ""} 
                                        onClick={this.pageUp}>
                                        <i className="fa fa-angle-right"></i>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className="home-content-frame">
                        <div className="home-content">
                            <h1 className="home-content-title">Discover the best and brightest projects on Jumpstarter.</h1>
                        </div>
                    </div>
                </div>)
            }
    }

}

