import React from "react";
import { Link } from 'react-router-dom';
import { ProjectItem } from "../home/home_projects";

export default class Discover extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            offset: 0
        }
    }

    componentDidMount() {
        const filter = {[this.props.filterType]: this.props.searchTerm, start: this.state.offset, limit: 9}
        this.props.fetchProjects(filter)
    }

    componentDidUpdate(oldProps) {
        if (oldProps.filterType !== this.props.filterType || oldProps.searchTerm != this.props.searchTerm){
            const filter = { [this.props.filterType]: this.props.searchTerm, start: this.state.offset }
            this.props.fetchProjects(filter)
        }
    }

    loadMore() {
        this.setState({offset: this.props.offset + 9})
    }

    render() {
        <div></div>
        if (!this.props.filterType) {
            return null;
        } else {
            let topMessage = `Show me All categories projects on Earth sorted by Magic`;
            if (this.props.searchTerm){
                topMessage = `Show me ${this.props.searchTerm} projects on Earth sorted by Magic`;
            } else if (this.props.category) {
                topMessage = `Show me ${this.props.category} projects on Earth sorted by Magic`;
            };
            
            let noResult = (
                <div>
                    <p>Oops! Looks like we couldn’t find any results. Why not change some things around or broaden your search?</p>
                </div>
            );

            let body = (
                <div className="discover-body-frame">
                    <div className="discover-grid-container">
                        <ul className="projects-show-grid">
                            {this.props.projects.map(
                                project => (
                                    <li key={project.id}
                                        className="discover-grid-item">
                                        <ProjectItem project={project} creator={this.props.users[project.creatorId]} />
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="discover-bottom-bar">
                        <button className="btn btn-green">Load more</button>
                    </div>
                </div>
            );
            return (
                <div className="home-frame">
                    <div className="form-header">
                        <div className="form-header-container">
                            <h1 className="form-header-title">
                                {topMessage}
                            </h1>
                        </div>
                    </div>
                    <div>
                        {this.props.projects.length === 0 ? noResult : body}
                    </div>
                </div>
            );
        }
    }

}

