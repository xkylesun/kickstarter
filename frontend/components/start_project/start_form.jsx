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
                <div className="preview-container">
                    <img className="start-upload=preview" src={this.state.previewUrl} />
                </div>
        }

        return (
            <div>
                <div id="project-basics">
                    <h1>Start with the basics</h1>
                    <h2>Make it easy for people to learn about your project.</h2>
                    <div>
                        <span>
                            <h2>Project title</h2>
                            <h3>Write a clear, brief title that helps people quickly understand the gist of your project.</h3>
                        </span>
                        <span>
                            <label>Title
                                <input type="text" onChange={this.handleInput("title")}/>
                            </label>
                            <label>Subtitle
                                <input type="text" onChange={this.handleInput("subtitle")} />
                            </label>
                            <label>Funding goal
                                <input type="number" onChange={this.handleInput("target")} />
                            </label>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h2>Project category</h2>
                            <h3>Choose the category that most closely aligns with your project.</h3>
                            <h3>Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory.</h3>
                            <h3>You’ll be able to change the category and subcategory even after your project is live.</h3>
                        </span>
                        <span>
                            <select defaultValue="0" onChange={this.handleInput("category")}>
                                <option disabled value="0">Category:</option>
                                <option value="art">Art</option>
                                <option value="comics">Comics</option>
                                <option value="design">Design</option>
                                <option value="games">Games</option>
                                <option value="technology">Technology</option>
                            </select>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h2>Project image</h2>
                            <h3>Add an image that clearly represents your project.</h3>
                            <h3>Choose one that looks good at different sizes. It will appear in different sizes in different places: on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.</h3>
                            <h3>You may want to avoid including banners, badges, and text because they may not be legible at smaller sizes.</h3>
                            <h3>Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.</h3>            
                        </span>
                        <span>
   
                            <input type="file" accept="image/*" onChange={this.handleFile}/>

                            {preview}
                        </span>
                    </div>

                    <div>
                        <span>
                            <h2>Campaign duration</h2>
                            <h3>Set a time limit for your campaign. You won’t be able to change this after you launch.</h3>
                        </span>
                        <span>
                            <p>End on a specific date &amp; time</p>
                                <input type="datetime-local" onChange={this.handleInput("dueDate")} />
                        </span>
                    </div>

                    <div className="bottom-bar">
                        <button type="button" onClick={this.handleClick("project-basics", "project-rewards")}>Next: Reward</button>
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