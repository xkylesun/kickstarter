import React from "react";

// only one project
export const Featured = (props) => {
    return (
    <div>
        <img src=""/>
        <h1>{props.project.title}</h1>
        <h2>{"props.project.description"}</h2>
        <p>By {props.creator.name}</p>
    </div>)
}


export const Recommended = (props) => {
    return (
    <div>
        <img src=""/>
        <h1>{props.project.title}</h1>
        <h3>{props.project.funding / props.project.target * 100}% funded</h3>
        <p>By {props.creator.name}</p>
    </div>)
}

