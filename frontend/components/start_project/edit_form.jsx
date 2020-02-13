import React from "react";

import StorySection from "./edit_story_section";
import RewardSection from "./edit_reward_section";
import BasicSection from "./edit_basic_section";
import { checkFilled } from "../../utils/other_utils";

export default class StartForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            title: "",
            subtitle: "",
            target: "",
            body: "",
            dueDate: "",
            imageFile: null,
            previewUrl: null,
            rewards: [],
            errors: []
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this); // newline
        this.handleClick = this.handleClick.bind(this);
        this.addReward = this.addReward.bind(this);
        this.deleteReward = this.deleteReward.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    };

    handleInput(stateName){
        return event => {
            event.currentTarget.classList.remove("unfilled");
            this.setState({ [stateName]: event.currentTarget.value});
        }
    }

    handleClick(divId1, divId2){
        return () => {
            this.setState({errors: []});
            document.getElementById(divId1).classList.add("hidden");
            document.getElementById(divId2).classList.remove("hidden");
        }
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        e.currentTarget.classList.remove("unfilled");
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
        if (checkFilled("reward-required")){
            let temp = JSON.parse(JSON.stringify(this.state.rewards));
            temp.push(formReward);
            this.setState({rewards: temp});
            return true;
        } else {
            this.setState({errors: ["Please complete all require fields"]});
            return false;
        }
    }

    deleteReward(idx){
        let temp = JSON.parse(JSON.stringify(this.state.rewards));
        temp.splice(idx, 1);
        this.setState({ rewards: temp });
    }

    handleSubmit(e) {
        if (checkFilled("project-required")){
            e.preventDefault();
            const formData = new FormData();
            formData.append('project[creator_id', this.props.currentUser.id);
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

        } else {
            this.setState({errors: ["Please complete all require fields"]});
        }
    }

    renderErrors() {
        if (this.state.errors.length === 0) return null;
        return (
            <section className="display-error">
                <ul>
                    {this.state.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </section>
        );
    };

    render() {
        return (
            <div>
                <BasicSection handleInput={this.handleInput} handleFile={this.handleFile} handleSubmit={this.handleSubmit} handleClick={this.handleClick} state={this.state} />

                <RewardSection handleClick={this.handleClick} addReward={this.addReward} deleteReward={this.deleteReward} rewards={this.state.rewards}/>

                <StorySection handleInput={this.handleInput} handleSubmit={this.handleSubmit} handleClick={this.handleClick} />
            
                {this.renderErrors()}
            </div >

        )
    }
}