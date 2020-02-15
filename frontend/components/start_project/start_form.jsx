import React, { Component } from 'react'

export default class StartForm extends Component {
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
                let projectId = result.payload.project.id
                this.props.history.push(`/projects/${projectId}/edit`)
            }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Bring your creative project to life</h2>
                    <button className="btn btn-green" onClick={this.handleSubmit}>Get started</button>
                </div>
            </div>
        )
    }
}
