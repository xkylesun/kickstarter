import React from "react";

import StorySection from "./edit_story_section";
import RewardSection from "./edit_reward_section";
import BasicSection from "./edit_basic_section";
import { checkFilled, checkGreaterThanToday } from "../../utils/other_utils";

export default class EditForm extends React.Component {
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
            errors: []
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this); // newline
        this.handleClick = this.handleClick.bind(this);
        this.addReward = this.addReward.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
    };

    componentDidMount(){
        this.props.fetchProjectDraft(this.props.match.params.projectId)
            .then(
                (res) => {
                    // console.dir(res)
                    if (res.payload.project.creatorId !== this.props.currentUser.id){
                        this.props.history.push("/user-not-authorized")
                    } else {
                        const { category, title, subtitle, target, body, dueDate } = this.props.draft;
                        const rewards = this.props.rewards;
                        this.setState({
                            category, title, subtitle, target, body, dueDate, rewards
                        });
                    }
                }
            );
    }

    handleInput(stateName){
        return e => {
            this.clearErrors();
            e.currentTarget.classList.remove("unfilled");

            if (stateName === "dueDate"){
                if (new Date(e.currentTarget.value) < new Date()){
                    this.setState({ errors: ["Date must not be in the past"]})
                } else {
                    this.setState({ [stateName]: e.currentTarget.value });
                }
            } else {
                this.setState({ [stateName]: e.currentTarget.value});
            }
        }
    }

    handleClick(divId1, divId2){
        return () => {
            this.clearErrors();
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
            this.props.createReward(formReward);
            return true;
        } else {
            this.setState({errors: ["Please complete all require fields"]});
            return false;
        }
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
            if (this.state.imageFile){
                formData.append('project[image]', this.state.imageFile);
            }
            // this.props.createProject(formData);
            // for (var key of formData.entries()) {
            //     console.log(key[0] + ', ' + key[1]);
            // }
            let projectId = this.props.match.params.projectId;
            this.props.updateProject({formData, projectId})
                .then(
                    () => this.props.history.push(`/projects/${projectId}`)
                );

        } else {
            this.setState({errors: ["Please complete all require fields"]});
        }
    }

    clearErrors(){
        if (this.state.errors.length > 0) this.setState({ errors: [] });
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
        let projectId = this.props.match.params.projectId;
        return (
            <div>
                <BasicSection 
                    handleInput={this.handleInput} 
                    handleFile={this.handleFile} 
                    handleSubmit={this.handleSubmit} 
                    handleClick={this.handleClick} 
                    state={this.state} />

                <RewardSection 
                    handleClick={this.handleClick} 
                    addReward={this.addReward} 
                    removeReward={this.props.removeReward}
                    clearErrors={this.clearErrors} 
                    projectId={projectId}
                    rewards={this.props.rewards}/>

                <StorySection 
                    handleInput={this.handleInput} 
                    handleSubmit={this.handleSubmit} 
                    handleClick={this.handleClick} 
                    body={this.state.body}/>
            
                {this.renderErrors()}
            </div >

        )
    }
}