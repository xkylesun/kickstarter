import React from "react";
import { parseNum, countDays } from "../../utils/other_utils";
import { Link } from 'react-router-dom';

// only one project
export const Featured = (props) => {
    return (
    <div className="feat-frame">
        <div className="image-container-16-9">
            <img className="image-16-9" src={props.project.imageUrl} />
        </div>
        <div className="bar-frame feat-bar">
            <div className="bar-green" style={{ width: `${props.project.funding / props.project.target * 100}%`}}></div>
            <div className="bar-gray" style={{ width: `${(1 - props.project.funding / props.project.target) * 100}%` }}></div>
        </div>

        <h1 className="feat-project-title">{props.project.title}</h1>
        <h2 className="feat-subtitle">{props.project.subtitle}</h2>
        <p className="attr-creator">By {props.creator.name}</p>
    </div>)
}


export const Recommended = (props) => {
    if (!props.creator || !props.project){
        return null;
    } else {
        return (
            <div className="rec-content-frame">
                <div className="rec-image-container">
                    <div className="image-container-16-9">
                        <img className="image-16-9 rec-image" src={props.project.imageUrl} />
                    </div>
                </div>
                <div className="rec-item-info">
                    <h1 className="rec-project-title">{props.project.title}</h1>
                    <h3 className="rec-funding">{Math.floor(props.project.funding / props.project.target * 100)}% funded</h3>
                    <p className="attr-creator">By {props.creator.name}</p>
                </div>
            </div>
        )
    };
};

export const ProjectItem = (props) => {
    if (!props.creator || !props.project) {
        return null;
    } else {
        return (
            <div className="project-item-frame">
                <div className="project-item">
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
                    <div>

                        <div className="discover-info-container">
                            <div className="bar-frame discover-bar-container">
                                <div className="bar-green" style={{ width: `${props.project.funding / props.project.target * 100}%` }}></div>
                                <div className="bar-gray" style={{ width: `${(1 - props.project.funding / props.project.target) * 100}%` }}></div>
                            </div> 
                            <p className="text-green">${parseNum(props.project.funding)} pledged</p>
                            <p className="text-gray">{Math.floor(props.project.funding / props.project.target * 100)}% funded</p>
                            <p className="text-gray">{ countDays(props.project.dueDate)} days to go</p>
                            <Link to={`ref=category=${props.project.category}`}>
                                <p className="cate-link text-gray underlined">{props.project.category}</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
}
