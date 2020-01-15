import React from "react";
import RewardForm from "./reward_form";
import RewardItem from "./reward_item"

export default class StartForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            title: "",
            subtitle: "",
            target: 0,
            body: "",
            dueDate: "",
            imageFile: null,
            previewUrl: null,
            rewards: []
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addReward = this.addReward.bind(this);
        this.deleteReward = this.deleteReward.bind(this);
    };

    handleInput(stateName){
        return event => {
            this.setState({ [stateName]: event.currentTarget.value});
        }
    }

    handleClick(divId1, divId2){
        return () => {
            document.getElementById(divId1).classList.add("hidden");
            document.getElementById(divId2).classList.remove("hidden");
        }
    }

    showForm(){
        document.getElementById("reward-form").classList.remove("hidden");
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        if (file) {
            if (file.size > 2097152) {
                alert("File is too large");
            } else {
                fileReader.onloadend = () => {
                    this.setState({ imageFile: file, previewUrl: fileReader.result });
                    document.getElementById("preview-container").classList.remove("hidden");
                };
                fileReader.readAsDataURL(file);
            }
        }
    }

    addReward(formReward){
        let temp = JSON.parse(JSON.stringify(this.state.rewards));
        temp.push(formReward);
        this.setState({rewards: temp});
    }

    deleteReward(idx){
        let temp = JSON.parse(JSON.stringify(this.state.rewards));
        temp.splice(idx, 1);
        this.setState({ rewards: temp });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('project[creator_id', this.props.currentUserId);
        formData.append('project[category]', this.state.category);
        formData.append('project[title]', this.state.title);
        formData.append('project[subtitle]', this.state.subtitle);
        formData.append('project[body]', this.state.body);
        formData.append('project[target]', this.state.target);
        formData.append('project[due_date]', this.state.dueDate);
        formData.append('project[image]', this.state.imageFile);
        formData.append('project[rewards]', JSON.stringify(this.state.rewards));
        // this.props.createProject(formData);
        // for (var key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }
        this.props.createProject(formData)
            .then(
                data => this.props.history.push(`/projects/${Object.keys(data.payload.projects)[0]}`)
            );

    }

    render() {
        return (
            <div>
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
                                onChange={this.handleInput("title")}/>

                                <h2 className="label">Subtitle</h2>

                                <textarea 
                                className="form-input start-textarea"
                                placeholder="Explore the invisible microscopic world around you with an affordable microscope kit you construct yourself."
                                onChange={this.handleInput("subtitle")}>
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
                                <select className="start-dropdown form-input" defaultValue="0" onChange={this.handleInput("category")}>
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
                                    <input id="form-input-image" type="file" accept="image/*" onChange={this.handleFile} />
                                </div>
                                <div id="preview-container"
                                className="hidden">
                                    <img id="form-image-preview" src={this.state.previewUrl} />
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
                                    <input type="number" className="form-input start-input currency-input" onChange={this.handleInput("target")} value={this.state.target} />
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
                                onChange={this.handleInput("dueDate")} />
                            </span>
                        </div>
                    </div>
                    <div className="bottom-bar">
                        <button type="button" className="btn-dark-green next-button" onClick={this.handleClick("project-basics", "project-rewards")}>Next: Rewards <i className="fa fa-angle-right"></i></button>
                    </div>
                    <div className="line-separator"></div>
                </div>

                <div className="hidden" id="project-rewards">
                    <div className="form-top-frame">
                        <div className="form-header">
                            <div className="form-header-container"
                            >
                            <h1 className="reward-header-title">Add your rewards</h1>
                            <h2 className="form-desc-body">Offer simple, meaningful rewards that bring backers closer to your project. Rewards don’t have to be physical items. Consider special experiences or behind-the-scenes peeks into your project.</h2>
                            </div>
                        </div>
                    </div>

                    <div className="form-top-frame">
                        <div className="reward-sub-header">
                            <div className="reward-sub-frame">
                                <div>
                                    <h1 className="form-header-title">Rewards</h1>
                                    <h2 className="form-desc-body">It's good to provide a range of prices but not too many options.</h2>
                                </div>
                                <div className="show-form-btn-container">
                                    <button className="btn btn-black" onClick={this.showForm}>+ Add a reward</button>
                                </div>
                            </div>
                            <div className="reward-item-display">
                                <ul>
                                {this.state.rewards.map((reward, idx) => {
                                    return (<li key={idx}><RewardItem reward={reward} idx={idx} deleteReward={this.deleteReward}/></li>)
                                })}
                                </ul>
                            </div>
                        </div>
                        <RewardForm addReward={this.addReward} />
                    </div>

                    <div className="bottom-bar">
                        <button className="next-button btn-dark-green" type="button" onClick={this.handleClick("project-rewards", "project-story")}>Next: Story <i className="fa fa-angle-right"></i></button>
                        <button className="back-button" type="button" onClick={this.handleClick("project-rewards", "project-basics")}><i className="fa fa-angle-left"></i> Back to Basics</button>
                    </div>
                    <div className="line-separator"></div>
                </div>


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
                                placeholder="Write about your project like you're explaining it to a friend..." onChange={this.handleInput("body")}></textarea>
                        </div>
                    </div>
                    <div className="bottom-bar">
                        <button className="btn-dark-green next-button" onClick={this.handleSubmit}>Launch my project</button>
                        <button type="button" className="back-button" onClick={this.handleClick("project-story", "project-rewards")}><i className="fa fa-angle-left"></i> Back to Rewards</button>
                    </div>
                    <div className="line-separator"></div>
                </div>
            </div>
        )
    }
}