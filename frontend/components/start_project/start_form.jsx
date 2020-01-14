import React from "react";
import RewardForm from "./reward_form";

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

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        if (file) {
            if (file.size > 2097152) {
                alert("File is too large");
            } else {
                fileReader.onloadend = () => {
                    this.setState({ imageFile: file, previewUrl: fileReader.result })
                };
                setTimeout( () => {
                console.dir(this.state)
                console.log(fileReader.result)
                }, 1000)
                fileReader.readAsDataURL(file);
            }
        }
    }

    addReward(formReward){
        let temp = JSON.parse(JSON.stringify(this.state.rewards));
        temp.push(formReward);
        this.setState({rewards: temp})
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

        var preview = null;
        if (this.state.imageUrl) {
            preview = 
            <div>
                <img 
                className="start-upload=preview" 
                src={this.state.previewUrl} />
            </div>
        }

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
                                    Add an image that clearly represents your project.
                                    <br/>
                                    Choose one that looks good at different sizes. It will appear in different sizes in different places: on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.
                                    <br/>
                                    You may want to avoid including banners, badges, and text because they may not be legible at smaller sizes.
                                    <br/>
                                    Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.
                                </h3>            
                            </span>
                            <span className="form-input-container">
                                <div className="image-input-box">
                                    <input type="file" accept="image/*" onChange={this.handleFile} />
                                </div>
                            </span>
                            {preview}
                        </div>

                        <div className="form-desc-frame">
                            <span className="form-desc-container">
                                <h2 className="form-desc-title">Funding goal</h2>
                                <h3 className="form-desc-body">
                                    Set an achievable goal that covers what you need to complete your project.
                                    <br/>
                                    Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.
                                </h3>
                            </span>
                            <span className="form-input-container">
                                <h2 className="label">Funding goal</h2>
                                <input type="number" className="form-input start-input" onChange={this.handleInput("target")} value={this.state.target} />
                            </span>
                        </div>

                        <div className="form-desc-frame">
                            <span className="form-desc-container">
                                <h2 className="form-desc-title">Campaign duration</h2>
                                <h3 className="form-desc-body">Set a time limit for your campaign. You won’t be able to change this after you launch.</h3>
                            </span>
                            <span className="form-input-container">
                                <p className="label">End on a specific date &amp; time</p>
                                <input className="form-input-date" type="date" onChange={this.handleInput("dueDate")} />
                            </span>
                        </div>

                        <div className="bottom-bar">
                            <button type="button" className="form-button" onClick={this.handleClick("project-basics", "project-rewards")}>Next: Reward</button>
                        </div>
                    </div>
                </div>








                <div className="hidden" id="project-rewards">
                    <h1>Add your rewards</h1>
                    <h2>Offer simple, meaningful rewards that bring backers closer to your project. Rewards don’t have to be physical items. Consider special experiences or behind-the-scenes peeks into your project.</h2>

                    <div>
                        <h1>Rewards</h1>
                        <h2>It's good to provide a range of prices but not too many options.</h2>
                        <RewardForm addReward={this.addReward} />
                    </div>

                    <div className="bottom-bar">
                        <button type="button" onClick={this.handleClick("project-rewards", "project-basics")}>Back to Basics</button>
                        <button type="button" onClick={this.handleClick("project-rewards", "project-story")}>Next: Story</button>
                    </div>
                </div>


                <div className="hidden" id="project-story">
                    <h1>Introduce your project</h1>
                    <h2>Tell people why they should be excited about your project. Get specific but be clear and be brief.</h2>
                    <div>
                        <h2>Project description</h2>
                        <h3>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your project is all about and what rewards look like.</h3>
                        <textarea placeholder="Write about your project like you're explaining it to a friend" onChange={this.handleInput("body")}></textarea>
                    </div>

                    <div className="bottom-bar">
                        <button type="button" onClick={this.handleClick("project-story", "project-rewards")}>Back to Rewards</button>
                        <button onClick={this.handleSubmit}>Launch my project</button>
                    </div>
                </div>
            </div>
        )
    }
}