import React from "react";
import { Link } from 'react-router-dom';
import {Featured, Recommended} from "./display" 

export default class Home extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProjects()
    }

    render(){
        if (!this.props.featured) {
            return null;
        } else {
            return (
                <div className="home-frame">
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
                            {this.props.recommended.map(project => {
                                return (<li key={project.id}>
                                            <Link to={`/projects/${project.id}`}>
                                                <Recommended
                                                    project={project}
                                                    creator={this.props.users[project.creatorId]}
                                            /></Link>
                                        </li>
                                        )
                                }
                            )}
                        </ul>
                    </div>

                </div>)
            }
    }

}

