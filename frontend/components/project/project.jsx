import React from "react";
import Reward from "./reward";

import { parseNum, countDays, scrollTo } from "../../utils/other_utils";



export default class Project extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let id = this.props.match.params.projectId;
        this.props.fetchProject(id)
            .then(
                res => {
                    let project = res.payload.project[id];
                    if(!project){
                        this.props.history.push("/project-not-found");
                    } else {
                        if (project.status !== "launched") {
                            this.props.history.push("/project-not-launched");
                        }
                    }
                }
            )
    }

    componentDidUpdate(prevProps) {
        let id = this.props.match.params.projectId;
        if (id !== prevProps.id) {
            this.props.fetchProject(id)
                .then(
                    res => {
                        let project = res.payload.project[id];
                        if (!project) {
                            this.props.history.push("/project-not-found");
                        } else {
                            if (project.status !== "launched") {
                                this.props.history.push("/project-not-launched");
                            }
                        }
                    }
                )
        }
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    render() {
        if (!this.props.project) {
            return null;
        } else {
            const { id, title, subtitle, body, imageUrl, target, dueDate, currentFunding, backersCount } = this.props.project;

            return (
                <div className="project-top-frame">
                    <div className="project-header-frame">
                        <div className="project-title-container">
                            <h1 className="project-header-title">{title}</h1>
                            <h2 className="project-header-subtitle">{subtitle}</h2>
                        </div>

                        <div className="project-content-container">
                            <span className="content-image-container">
                                <img className="content-image" src={imageUrl}></img>
                            </span>
                            <span className="content-info-container">
                                <div className="funding-bar-frame">
                                    <div className="bar-light-green" style={{ width: `${currentFunding / target * 100}%` }}></div>
                                    <div className="bar-gray" style={{ width: `${(1 - currentFunding / target) * 100}%` }}></div>
                                </div>
                                <section className="content-info-number content-info-funding">${parseNum(currentFunding)}</section>
                                <section className="content-info-unit">pledged of ${parseNum(target)} goal</section>
                                <section className="content-info-number">{parseNum(backersCount)}</section>
                                <section className="content-info-unit">backers</section>
                                <section className="content-info-number">{countDays(dueDate)}</section>
                                <section className="content-info-unit">days to go</section>
                                <button className="btn btn-green" type="button" onClick={() => scrollTo("reward-frame")}>Back this project</button>
                                <p className="disclaimer"><span className="underlined">All or nothing.</span> This project will only be funded if it reaches its goal by {"date"}.</p>
                            </span>
                        </div>
                    </div>

                    <div className="project-menu-frame">
                        <ul className="project-menu">
                            <li>Campaign</li>
                        </ul>
                    </div>
                    <div className="project-body-frame">
                        <div className="project-body-1-2">
                            <ul className="body-sidebar">
                                <li className="underlined body-sidebar-item">STORY</li>
                            </ul>
                            <div className="project-body-main">
                                <h1 className="project-body-title">Story</h1>
                                <section className="project-body-text">{body}</section>
                            </div>
                        </div>


                        <div className="project-body-2-2">
                            <div className="project-user-profile">
                                <div className="project-avatar-container">
                                    <img className="project-user-avatar" src={this.props.creator.avatar} />
                                </div>

                                <div className="project-user-info">
                                    <h2 className="profile-name">{this.props.creator.name}</h2>
                                    <p className="profile-bio">{this.props.creator.biography}</p>
                                </div>

                            </div>

                            <div className="reward-frame" id="reward-frame">
                                <h1 className="rewards-title">Support</h1>
                                <ul className="rewards">
                                    {this.props.rewards.map(reward => 
                                        (<Reward 
                                            reward={reward} 
                                            key={reward.id} 
                                            projectId={id}
                                            currentUser={this.props.currentUser}
                                            createPledge={this.props.createPledge}
                                            errors={this.props.errors}
                                        />)
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}