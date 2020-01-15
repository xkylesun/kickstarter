import React from "react";

// only one project
export const Featured = (props) => {
    return (
    <div className="feat-frame">
        <div className="image-container-16-9">
            <img className="image-16-9" src={props.project.imageUrl} />
        </div>
        <div className="bar-frame">
            <div className="bar-green" style={{ width: `${props.project.funding / props.project.target * 100}%`}}></div>
            <div className="bar-gray" style={{ width: `${(1 - props.project.funding / props.project.target) * 100}%` }}></div>
        </div>

        <h1 className="feat-project-title">{props.project.title}</h1>
        <h2 className="feat-subtitle">{props.project.subtitle}</h2>
        <p className="attr-creator">By {props.creator.name}</p>
    </div>)
}


export const Recommended = (props) => {
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
}

