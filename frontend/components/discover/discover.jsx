import React from "react";
import { Link } from 'react-router-dom';
import { ProjectItem } from "../home/home_projects";

export default class Discover extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            lastPage: false
        }
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        const filter = { type: this.props.filterType, search_term: this.props.searchTerm, limit: 3 }
        this.props.fetchProjects(filter)
        this.autoLoad();
    }

    componentDidUpdate(prevProps, prevState) {
        let that = this;
        if (prevProps.location.pathname !== this.props.location.pathname){
            const filter = { type: this.props.filterType, search_term: this.props.searchTerm, limit: 3 };
            this.props.fetchProjects(filter);
            this.setState({ page: 1, lastPage: false });
        };
        if (prevState.page !== this.state.page) {
            let filters = { type: this.props.filterType, search_term: this.props.searchTerm, page: this.state.page, limit: 3 }
            this.props.fetchMoreProjects(filters)
                .then(res => {
                    that.setState({ lastPage: res.payload.lastPage });
                })
        };
    }

    loadMore() {
        if (!this.state.lastPage){
            this.setState({ page: this.state.page + 1 });
        }
    }

    autoLoad() {
        let _ = require('lodash');
        let callback = (e) => {
            let ele = e.target.scrollingElement
            if (ele.scrollHeight - ele.scrollTop === ele.clientHeight) {
                this.loadMore();
            }
        };
        document.addEventListener('scroll', _.throttle(callback, 500));
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
                                        <ProjectItem project={project} creator={this.props.users[project.creatorId]} />
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="discover-bottom-bar">
                        <span className="btn-container">
                            <button
                                id="load-more-btn"
                                className={this.state.lastPage ? "btn btn-green btn-load hidden" : "btn btn-green btn-load"}
                                type="button" 
                                disabled={this.state.lastPage}
                                onClick={this.loadMore}>Load more</button>
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

