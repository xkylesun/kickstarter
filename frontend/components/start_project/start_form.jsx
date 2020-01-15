import React from "react";

import StorySection from "./start_form_story_section";
import RewardSection from "./start_form_reward_section";
import BasicSection from "./start_form_basic_section";

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
        this.handleInput = this.handleInput.bind(this); // newline
        this.handleClick = this.handleClick.bind(this);
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
                <BasicSection handleInput={this.handleInput} handleFile={this.handleFile} handleSubmit={this.handleSubmit} handleClick={this.handleClick} state={this.state} />

                <RewardSection handleClick={this.handleClick} addReward={this.addReward} deleteReward={this.deleteReward} rewards={this.state.rewards}/>

                <StorySection handleInput={this.handleInput} handleSubmit={this.handleSubmit} handleClick={this.handleClick} />
            </div >

        )
    }
}