import React from "react";
import { Link } from 'react-router-dom';
import {Featured, Recommended} from "./display" 

export default class Home extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProjects()
        setTimeout(() => console.dir(this.props),1000)
    }

    render(){
        if (!this.props.featured) {
            return null;
        } else {
            return (
                <div>
                    <div className="home-featured-frame">
                        <h1>FEATURED PROJECT</h1>
                        <Link to={`/projects/${this.props.featured.id}`}>
                            <Featured 
                                project={this.props.featured} 
                                creator={this.props.users[this.props.featured.creatorId]}/>
                        </Link>
                    </div>
                    <div className="home-rec-frame">
                        <h2>RECOMMENDED</h2>
                        <ul>
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

