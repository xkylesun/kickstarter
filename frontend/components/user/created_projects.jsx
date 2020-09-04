import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreatedProjects extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let id = this.props.currentUser.id;
        this.props.fetchUser(id);
        // console.log(this.props)
    }


    render() {
        return (
            <div className="created-projects-frame">
                <div className="created-projects-subframe">
                    <div className="created-header-frame">
                        <h1 className="created-header-title">Created projects</h1>
                        <h2 className="created-header-sub">A place to keep track of all your created projects</h2>
                    </div>
                    <div className="created-body-frame">
                        <h3 className="created-body-title">Started</h3>
                        <ul className="created-projects-lists">
                            {this.props.createdProjects.map(
                                project => (
                                    <li key={project.id} className="created-item-frame">
                                        <Link to={project.status === "launched" ? `/projects/${project.id}/` : `/projects/${project.id}/edit`}>
                                            <span className="created-image-frame">
                                                <div className="image-container-16-9">
                                                    <img className="image-16-9 created-image" src={project.imageUrl} />
                                                </div>
                                            </span>
                                        </Link>
                                        <div className="created-content-frame">
                                            <span className="created-content-main">
                                                <div className="created-content-subframe">
                                                    <Link className="rec-image-container" to={project.status === "launched" ? `/projects/${project.id}/` : `/projects/${project.id}/edit`}>
                                                        <h3 className="created-content-title">{project.title}</h3>
                                                    </Link>
                                                    <h4 className="created-content-sub">{project.subtitle}</h4>
                                                </div>
                                            </span>
                                            <span className="created-btn-container">
                                                <button
                                                    type="button"
                                                    className="created-btn"
                                                    onClick={() => this.props.history.push(`/projects/${project.id}/edit`)}
                                                >Edit</button>
                                                <button
                                                    type="button"
                                                    className="created-btn"
                                                    onClick={() => this.props.deleteProject(project.id)}
                                                >Delete</button>
                                            </span>
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
