import React, { Component } from 'react'

export default class StartProject extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        this.props.createProject({
            title: "",
            subtitle: "",
            creator_id: this.props.currentUser.id,
            category: "",
            target: 0,
            due_date: "",
            body: ""
        }).then(
            (result) => {
                let projectId = result.project.id
                this.props.history.push(`/projects/${projectId}/edit`)
            }
        )
    }

    render() {
        return (
            <div className="start-project-frame">
                <div className="start-project-background">
                    <iframe 
                        id="start-video" 
                        src="https://www.youtube.com/embed/y90yaLFoYoA?playlist=y90yaLFoYoA&controls=0&autoplay=1&mute=1&loop=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                    <div className="start-project-content">
                        <h2 className="start-project-title">Bring your creative project to life.</h2>
                        <button className="btn btn-new-project" onClick={this.handleSubmit}>Get started</button>
                    </div>
                </div>
            </div>
        )
    }
}
