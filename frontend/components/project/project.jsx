import React from "react";
import PledgeLevel from "./pledge_level";

export default class Project extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            body: "",
            videoLink: "",
            pledgeLevels: []

        }
    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
        setTimeout(()=> console.dir(this.props),1000)
        setTimeout(() => this.setState({
            title: this.props.project.title,
            body: this.props.project.body,
            videoLink: this.props.project.videoLink,
            pledgeLevels: this.props.pledgeLevels
        }), 1000)
    }

    render(){
        if (!this.props.project) return null;
        return (
        <div>
            PROJECT SHOW PAGE
            <video src=""></video>
            <section>{this.state.body}</section>
            <p>{this.state.title}</p>
            <section className="pledge-level-frame">
                <ul className="pledge-levels">
                    {this.state.pledgeLevels.map(level => <PledgeLevel level={level} key={level.id}/>)}
                </ul>
            </section>

        </div>
        )
    }
}