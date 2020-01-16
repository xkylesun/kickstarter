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
        if (oldProps.location.pathname !== this.props.location.pathname){
            const filter = { [this.props.filterType]: this.props.searchTerm, start: this.state.offset }
            this.props.fetchProjects(filter)
        }
    }

    loadMore() {
        this.setState({offset: this.props.offset + 9})
    }

    render() {
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
                <div className="no-result-frame">
                    <div className="no-result-box">
                        <p className="no-result-text">Oops! Looks like we couldn’t find any results. Why not change some things around or broaden your search? You can also try:</p>
                        <Link className="link" to="/discover/ref=category=games">Show me <span className="bolded">games</span> projects</Link>
                        <Link className="link" to="/discover/ref=sort=magic">Show me all projects</Link>
                    </div>
                </div>
            );

            let body = (
                <div className="discover-body-frame">
                    <div className="discover-grid-container">
                        <ul className="discover-grid">
                            {this.props.projects.map(
                                project => (
                                    <li key={project.id}
                                        className="discover-grid-item">
                                        <Link to={`/projects/${project.id}`}>
                                            <ProjectItem project={project} creator={this.props.users[project.creatorId]} />
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="discover-bottom-bar">
                        <span className="btn-container">
                            <button className="btn btn-green btn-load">Load more</button>
                        </span>
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

