import React from "react";

// only one project
export const Featured = (props) => {
    return (
    <div className="feat-frame">
        <div className="image-container">
            <img className="image feat-img" src="https://ksr-ugc.imgix.net/assets/027/539/333/e97fe76e6f1a364d80069fdf9aa705ca_original.JPG?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1576687762&auto=format&frame=1&q=92&s=d9b24a424fb492f6aea4b38299305ede" />
            <div className="bar-frame">
                <div className="bar-green"></div>
                <div className="bar-gray"></div>
            </div>
        </div>

        <h1 className="feat-project-title">{props.project.title}</h1>
        <h2 className="feat-subtitle">{"props.project.subtitle"}</h2>
        <p className="attr-creator">By {props.creator.name}</p>
    </div>)
}


export const Recommended = (props) => {
    return (
    <div className="rec-item-frame">
        <div className="rec-content-container">
            <div className="rec-image-container">
                <img className="image rec-image" src="https://ksr-ugc.imgix.net/assets/027/539/333/e97fe76e6f1a364d80069fdf9aa705ca_original.JPG?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1576687762&auto=format&frame=1&q=92&s=d9b24a424fb492f6aea4b38299305ede" />
            </div>
            <div className="rec-item-info">
                <h1 className="rec-project-title">{props.project.title}</h1>
                <h3 className="rec-funding">{Math.floor(props.project.funding / props.project.target * 100)}% funded</h3>
                <p className="attr-creator">By {props.creator.name}</p>
            </div>
        </div>
        <div className="line-full"></div>
    </div>)
}

