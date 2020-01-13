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

    countDays(date){
        let currentDate = new Date();
        let dueDate = new Date(date);
        return Math.floor((dueDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
    }

    render(){
        console.dir(this.props)
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
                                <section className="content-info-number content-info-funding">${currentFunding}</section>
                                <section className="content-info-unit">pledged of ${target} goal</section>
                            <section className="content-info-number">{backersCount}</section>
                            <section className="content-info-unit">backers</section>
                            <section className="content-info-number">{this.countDays(dueDate)}</section>
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
                                <img className="project-user-avatar" src="https://ksr-ugc.imgix.net/assets/027/546/015/fcad2610f647f10117260b8c41218d3f_original.jpeg?ixlib=rb-2.1.0&w=160&h=160&fit=crop&v=1576755292&auto=format&frame=1&q=92&s=d6f914fa13e5d31172b55fc00fb3303f" alt="" />
                            </div>
                            
                            <div className="project-user-info">
                                <h2 className="profile-name">{"user.name"}</h2>
                                <p className="profile-bio">{"user bio"}</p>
                            </div>

                        </div>

                        <div className="pledge-level-frame">
                            <h1 className="pledge-level-title">Support</h1>
                            <ul className="pledge-levels">
                                {this.props.pledgeLevels.map(level => <PledgeLevel level={level} key={level.id}/>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
}