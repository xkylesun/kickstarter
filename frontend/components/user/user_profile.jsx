import React from "react";
import { Link } from 'react-router-dom';

export default class UserProfile extends React.Component{
    constructor(props){
        super(props)
    };

    componentDidMount(){
        let targetId = parseInt(this.props.match.params.userId);
        let currentUserId = this.props.currentUser ? this.props.currentUser.id : null;

        if (targetId && currentUserId && targetId !== currentUserId){
            this.props.fetchUser(targetId)
                .then(
                    res => {
                        if (!res.payload.user.id){
                            this.props.history.push("/user-not-found")
                        }
                    }
                )
        } else if (!targetId) {
            this.props.fetchUser(currentUserId);
        } else {
            this.props.history.push("/profile/")
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

    render(){
        console.dir(this.props)
        if (!this.props.backedProjects){
            return null;
        }

        return (
            <div>USER PROFILE
                <div>
                <ul>
                    {this.props.backedProjects.map( project => {
                        let creator = this.props.creators[project.creatorId]
                        return (<li key={project.id}>
                            <div className="image-container-16-9 discover-image">
                                <Link to={`/projects/${project.id}`}>
                                    <img className="image-16-9" src={project.imageUrl} />
                                </Link>
                            </div>
                            <div className="discover-title-frame">
                                <Link to={`/projects/${project.id}`}>
                                    <h2 className="discover-title">{project.title}</h2>
                                    <h3 className="discover-sub">{project.subtitle}</h3>
                                </Link>
                                <p className="discover-creator">by {creator.name}</p>
                            </div>
                        </li>)
                        }
                    )}
                </ul>
                </div>
                <div>

                </div>
            </div>
        )
    }
}