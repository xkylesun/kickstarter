import React from "react";

export default class StorySection extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="hidden" id="project-story">
                <div className="form-top-frame">
                    <div className="form-header">
                        <div className="form-header-container">
                            <h1 className="form-header-title">Introduce your project</h1>
                            <h2 className="form-header-sub">Tell people why they should be excited about your project. Get specific but be clear and be brief.</h2>
                        </div>
                    </div>
                </div>

                <div className="form-story-frame">
                    <div className="form-story-container">
                        <h2 className="form-desc-title">Project description</h2>
                        <h3 className="form-desc-body">Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your project is all about and what rewards look like.</h3>
                    </div>
                    <div className="textbox-container">
                        <textarea
                            id="form-story-textarea"
                            placeholder="Write about your project like you're explaining it to a friend..." onChange={this.props.handleInput("body")}></textarea>
                    </div>
                </div>
                <div className="bottom-bar">
                    <button className="btn-dark-green next-button" onClick={this.props.handleSubmit}>Launch my project</button>
                    <button type="button" className="back-button" onClick={this.props.handleClick("project-story", "project-rewards")}><i className="fa fa-angle-left"></i> Back to Rewards</button>
                </div>
                <div className="line-separator"></div>
            </div>
        );
    }
}