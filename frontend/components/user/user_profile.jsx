import React from "react";
import { Link } from 'react-router-dom';

 export default class UserProfile extends React.Component{
     constructor(props){
         super(props)
     };

     componentDidMount(){
         this.props.fetchUserProjects();
     }

     render(){
         return (
             <div>USER PROFILE
                 <div>
                    <ul>
                        {this.props.backedProjects.map( project => (
                            <li key={project.id}>
                                <div className="image-container-16-9 discover-image">
                                    <Link to={`/projects/${props.project.id}`}>
                                        <img className="image-16-9" src={props.project.imageUrl} />
                                    </Link>
                                </div>
                                <div className="discover-title-frame">
                                    <Link to={`/projects/${props.project.id}`}>
                                        <h2 className="discover-title">{props.project.title}</h2>
                                        <h3 className="discover-sub">{props.project.subtitle}</h3>
                                    </Link>
                                    <p className="discover-creator">by {props.creator.name}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                 </div>
                 <div>

                 </div>
             </div>
         )
     }
 }