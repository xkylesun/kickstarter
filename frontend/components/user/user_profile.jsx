import React from "react";
import { Link } from 'react-router-dom';

export default class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.handleChangeAvatar = this.handleChangeAvatar.bind(this);
    };

    componentDidMount(){
        let targetId = parseInt(this.props.match.params.userId);
        let currentUserId = this.props.currentUser ? this.props.currentUser.id : null;

        if (!targetId && !currentUserId){
            this.props.history.push("/login");
        }

        if (targetId && targetId !== currentUserId){
            this.props.fetchUser(targetId)
                .then(
                    res => {
                        if (!res.payload.user.id) {
                            this.props.history.push("/user-not-found")
                        }
                    }
                )
        }

        if (targetId && targetId === currentUserId){
            this.props.history.push("/profile/")
        } 

        if (!targetId && currentUserId){
            this.props.fetchUser(currentUserId);
        }
    }

    componentDidUpdate(prevProps){
        let targetId = parseInt(this.props.match.params.userId);
        let currentUserId = this.props.currentUser ? this.props.currentUser.id : null;
 
        if (targetId && targetId !== prevProps.targetId){
            if (targetId === currentUserId){
                this.props.history.push("/profile/")
            } else {
                this.props.fetchUser(targetId)
                    .then(
                        res => {
                            if (!res.payload.user.id) {
                                this.props.history.push("/user-not-found")
                            }
                        }
                    )
            }
        }
    }

    handleChangeAvatar(e){
        if (this.props.currentUser){
            if (this.props.currentUser.id === this.props.targetId){
                const avatar = e.currentTarget.files[0];
                if (avatar) {
                    if (avatar.size > 2097152) {
                        alert("File must be less than 2MB");
                    } else {
                        const formData = new FormData();
                        const userId = this.props.currentUser.id;
                        formData.append('user[avatar]', avatar);
                        this.props.updateUser({ formData, userId });
                    }
                }
            }
        }
    }

    render(){
        if (!this.props.targetUser){
            return null;
        }
        return (
            <div className="user-profile-frame">
                <div className="user-profile-main">
                    <div className="profile-avatar-container">
                        <label 
                            id="input-avatar-label"
                            style={{ display: !this.props.match.params.userId ? "block" : "none" }}>
                            Upload
                            <input type="file" accept="image/*" id="input-avatar" onChange={this.handleChangeAvatar}/>
                        </label>
                        <img 
                            className="profile-avatar" 
                            src={this.props.targetUser.avatar} 
                        />
                    </div>

                    <div className="project-user-info">
                        <h2 className="profile-name">{this.props.targetUser.name}</h2>
                        <p className="profile-count">Backed {this.props.backedProjects.length} projects</p>
                    </div>

                </div>
                <div className="profile-backed-frame">
                    <div className="profile-menu">
                        <span className="profile-menu-text">Backed
                            <p className="backed-mark">{this.props.backedProjects.length > 0 ? this.props.backedProjects.length : ""}</p>
                        </span>
                    </div>
                    <div className="backed-grid-container">
                    <ul className="backed-projects-grid">
                        {this.props.backedProjects.map(project => {
                            let creator = this.props.creators[project.creatorId]
                            return (
                            <li key={project.id}>
                                <div className="project-item-frame">
                                    <div className="project-item">
                                        <div className="image-container-16-9 discover-image">
                                            <Link to={`/projects/${project.id}`}>
                                                    <img className="image-16-9" src={project.imageUrl} />
                                            </Link>
                                        </div>
                                        <div className="backed-title-frame">
                                            <Link to={`/projects/${project.id}`}>
                                                <h2 className="discover-title">{project.title}</h2>
                                                <h3 className="discover-sub">{project.subtitle}</h3>
                                            </Link>
                                        </div>
                                        <div className="backed-creator-frame">
                                            <div className="backed-creator-main">
                                                <Link to={`/profile/${creator.id}`}>
                                                    <img className="backed-creator-avatar" src={creator.avatar} />
                                                </Link>
                                                <p className="backed-creator">by <span className="bold">{creator.name}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>)
                        }
                        )}
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}