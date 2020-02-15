import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreatedProjects extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let id = this.props.currentUser.id;
        this.props.fetchUser(id);
    }

    render() {
        console.dir(this.props)
        return (
            <div>
                <div>
                    <h1>Created projects</h1>
                    <h2>A place to keep track of all your created projects</h2>
                </div>
                <div>
                    <h3>Started</h3>
                    <ul>
                        {this.props.createdProjects.map(
                            project => (
                                <li key={project.id}>
                                    <span>
                                        <div className="image-container-16-9">
                                            <Link to={project.status === "launched" ? `/projects/${project.id}/` : `/projects/${project.id}/edit`}>
                                                <img className="image-16-9 rec-image" src={project.imageUrl} />
                                            </Link>
                                        </div>
                                    </span>
                                    <span>
                                        <Link to={project.status === "launched" ? `/projects/${project.id}/` : `/projects/${project.id}/edit`}>
                                            <h3>{project.title}</h3>
                                        </Link>
                                        <h4>{project.subtitle}</h4>
                                    </span>
                                    <span>
                                        <button
                                            type="button"
                                            className=""
                                            onClick={() => this.props.history.push(`/projects/${project.id}/edit`)}
                                        >Edit</button>
                                        <button
                                            type="button"
                                            className=""
                                            onClick={() => this.props.deleteProject(project.id)}
                                        >Delete</button>
                                    </span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
