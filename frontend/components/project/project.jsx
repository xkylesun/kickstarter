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

    componentDidUpdate(prevProps) {
        console.log(this.props.match.params.projectId);
        console.log(prevProps.id)
        if (this.props.match.params.projectId !== prevProps.id) {
            this.props.fetchProject(this.props.match.params.projectId)
            // setTimeout(() => this.setState({
            //         title: this.props.project.title,
            //         body: this.props.project.body,
            //         videoLink: this.props.project.videoLink,
            //         pledgeLevels: this.props.pledgeLevels
            //     }), 1000)
        }
    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
        // setTimeout(()=> console.dir(this.props),1000)
        // setTimeout(() => this.setState({
        //     title: this.props.project.title,
        //     body: this.props.project.body,
        //     videoLink: this.props.project.videoLink,
        //     pledgeLevels: this.props.pledgeLevels
        // }), 1000)
    }

    render(){
        if (!this.props.project) return null;
        const {title, body, videoLink} = this.props.project;
        
        return (
        <div>
            PROJECT SHOW PAGE
            <video src=""></video>
            <section>{body}</section>
            <p>{title}</p>
            <section className="pledge-level-frame">
                <ul className="pledge-levels">
                    {this.props.pledgeLevels.map(level => <PledgeLevel level={level} key={level.id}/>)}
                </ul>
            </section>

        </div>
        )
    }
}