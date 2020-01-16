import React from "react";
import Reward from "./reward";

import {parseNum, countDays} from "../../utils/other_utils";



export default class Project extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.projectId !== prevProps.id) {
            this.props.fetchProject(this.props.match.params.projectId)
        }
    }

    render(){
        if (!this.props.project) {
            return null;
        } else {
            const {title, subtitle, body, imageUrl, target, dueDate, currentFunding, backersCount} = this.props.project;

            return (
            <div>
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
                                <div className="bar-green" style={{ width: `${currentFunding / target * 100}%` }}></div>
                                <div className="bar-gray" style={{ width: `${(1 - currentFunding / target) * 100}%` }}></div>
                            </div>
                            <section className="content-info-number content-info-funding">${parseNum(currentFunding)}</section>
                            <section className="content-info-unit">pledged of ${parseNum(target)} goal</section>
                            <section className="content-info-number">{parseNum(backersCount)}</section>
                            <section className="content-info-unit">backers</section>
                            <section className="content-info-number">{countDays(dueDate)}</section>
                            <section className="content-info-unit">days to go</section>
                            <button className="btn btn-green" type="button">Back this project</button>
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
                            <li className="underlined body-sidebar-item"><a>STORY</a></li>
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

                        <div className="reward-frame">
                            <h1 className="rewards-title">Support</h1>
                            <ul className="rewards">
                                {this.props.rewards.map(reward => <Reward reward={reward} key={reward.id}/>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
}