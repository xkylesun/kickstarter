import React from "react";

export default class BasicSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="project-basics">
                <div className="form-top-frame">
                    <div className="form-header">
                        <div className="form-header-container">
                            <h1 className="form-header-title">Start with the basics</h1>
                            <h2 className="form-header-sub">Make it easy for people to learn about your project.</h2>
                        </div>
                    </div>
                    <div className="form-desc-frame">
                        <span className="form-desc-container">
                            <h2 className="form-desc-title">Project title</h2>
                            <h3 className="form-desc-body">Write a clear, brief title that helps people quickly understand the gist of your project.</h3>
                        </span>
                        <span className="form-input-container">
                            <h2 className="label">Title</h2>
                            <input
                                className="form-input start-input"
                                type="text"
                                placeholder="The Community Microscope Kit"
                                onChange={this.props.handleInput("title")} />

                            <h2 className="label">Subtitle</h2>

                            <textarea
                                className="form-input start-textarea"
                                placeholder="Explore the invisible microscopic world around you with an affordable microscope kit you construct yourself."
                                onChange={this.props.handleInput("subtitle")}>
                            </textarea>
                        </span>
                    </div>

                    <div className="form-desc-frame">
                        <span className="form-desc-container">
                            <h2 className="form-desc-title">Project category</h2>
                            <h3 className="form-desc-body">
                                <p>Choose the category that most closely aligns with your project. </p>
                                <p>Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory.</p>
                                <p>You’ll be able to change the category and subcategory even after your project is live.</p>

                            </h3>
                        </span>
                        <span className="form-input-container">
                            <select className="start-dropdown form-input" defaultValue="0" onChange={this.props.handleInput("category")}>
                                <option disabled value="0">Category:</option>
                                <option value="art">Art</option>
                                <option value="comics">Comics</option>
                                <option value="design">Design</option>
                                <option value="games">Games</option>
                                <option value="technology">Technology</option>
                            </select>
                        </span>
                    </div>

                    <div className="form-desc-frame">
                        <span className="form-desc-container">
                            <h2 className="form-desc-title">Project image</h2>
                            <h3 className="form-desc-body">
                                <p>
                                    Add an image that clearly represents your project.
                                    </p>
                                <p>
                                    Choose one that looks good at different sizes. It will appear in different sizes in different places: on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.
                                    </p>
                                <p>
                                    You may want to avoid including banners, badges, and text because they may not be legible at smaller sizes.
                                    </p>
                                <p>
                                    Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.
                                    </p>
                            </h3>
                        </span>
                        <span className="form-input-container">
                            <div className="image-input-box">
                                <input id="form-input-image" type="file" accept="image/*" onChange={this.props.handleFile} />
                            </div>
                            <div id="preview-container"
                                className="hidden">
                                <img id="form-image-preview" src={this.props.state.previewUrl} />
                            </div>
                        </span>
                    </div>

                    <div className="form-desc-frame">
                        <span className="form-desc-container">
                            <h2 className="form-desc-title">Funding goal</h2>
                            <h3 className="form-desc-body">
                                <p>
                                    Set an achievable goal that covers what you need to complete your project.
                                    </p>
                                <p>
                                    Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.
                                    </p>
                            </h3>
                        </span>
                        <span className="form-input-container">
                            <h2 className="label">Funding goal</h2>
                            <div className="currency-box-container last-container">
                                <p className="currency-box">$</p>
                                <input type="number" className="form-input start-input currency-input" onChange={this.props.handleInput("target")} value={this.props.state.target} />
                            </div>
                        </span>
                    </div>

                    <div className="form-desc-frame last-container">
                        <span className="form-desc-container">
                            <h2 className="form-desc-title">Campaign duration</h2>
                            <h3 className="form-desc-body">Set a time limit for your campaign. You won’t be able to change this after you launch.</h3>
                        </span>
                        <span className="form-input-container">
                            <p className="label">End on a specific date</p>
                            <input
                                className="form-input" id="input-date" type="date"
                                onChange={this.props.handleInput("dueDate")} />
                        </span>
                    </div>
                </div>
                <div className="bottom-bar">
                    <button type="button" className="btn-dark-green next-button" onClick={this.props.handleClick("project-basics", "project-rewards")}>Next: Rewards <i className="fa fa-angle-right"></i></button>
                </div>
                <div className="line-separator"></div>
            </div>
        );
    }
}