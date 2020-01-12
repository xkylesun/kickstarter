import React from "react";
import PledgeLevel from "./pledge_level";

export default class Project extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
    }

    componentDidUpdate(prevProps) {
        // console.log(this.props.match.params.projectId);
        // console.log(prevProps.id)
        if (this.props.match.params.projectId !== prevProps.id) {
            this.props.fetchProject(this.props.match.params.projectId)
        }
    }

    render(){
        if (!this.props.project) {
            return null;
        } else {
            const {title, body, videoLink} = this.props.project;
        
            return (
            <div>
                <section className="proejct-header">
                    <p>{title}</p>
                    <p>{"description"}</p>
                </section>

                <section className="project-main">
                    <span>
                        <img src=""></img>
                    </span>

                    <span>
                        <ul>
                            <li>{"num"}</li>
                            <li>pledged of ${} goal</li>
                            <li>{"num"}</li>
                            <li>backers</li>
                            <li>{"num"}</li>
                            <li>day to go</li>
                        </ul>
                    </span>
                    <button type="button">Back this project</button>
                    <p>All or nothing. This project will only be funded if it reaches its goal by {"date"}.</p>
                </section>

                <section className="project-body">
                    {body}
                </section>

                <section>
                    <img src="" alt=""/>Avatar
                    <h2>{"user.name"}</h2>
                    <p>{"user bio"}</p>
                </section>

                <section className="pledge-level-frame">
                    <ul className="pledge-levels">
                        {this.props.pledgeLevels.map(level => <PledgeLevel level={level} key={level.id}/>)}
                    </ul>
                </section>

            </div>
            )
        }
    }
}