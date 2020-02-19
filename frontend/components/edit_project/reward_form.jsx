import React from "react";

export default class RewardForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: "",
            minimum: "",
            quantity: "",
            month: "",
            year: ""
        }
    }

    clearForm() {
        this.setState({
            title: "",
            description: "",
            minimum: "",
            quantity: "",
            month: "",
            year: "",
        })
    }

    handleInput(stateName) {
        return event => {
            this.props.clearErrors();
            event.currentTarget.classList.remove("unfilled");
            this.setState({ [stateName]: event.currentTarget.value });
        }
    }

    render(){
        let currYear = new Date().getFullYear();

        return (
            <div className="reward-form-frame hidden" id="reward-form">
                <div className="reward-desc-frame">
                    <h1 className="form-desc-title">Add a reward</h1>
                    <h2 className="form-desc-body">Offer tangible or intangible things that bring backers closer to your project.</h2>
                </div>
                <div className="reward-input-frame">
                    <h1 className="reward-desc-title">Title *</h1>
                    <h2 className="reward-desc-body">Briefly describe this reward.</h2>
                    <input 
                        className="form-input start-input reward-required" 
                        type="text" 
                        placeholder="Signed limited-edition" 
                        value={this.state.title} onChange={this.handleInput("title")}/>
                </div>

                <div className="reward-input-frame">
                    <h1 className="reward-desc-title">Pledge amount *</h1>
                    <h2 className="reward-desc-body">Set a minimum pledge amount for this reward.</h2>
                    <div className="currency-box-container last-container">
                        <p className="currency-box">$</p>
                        <input 
                            id="pledge-amount-num"
                            className="form-input start-input currency-input reward-required" 
                            type="number" onChange={this.handleInput("minimum")} 
                            value={this.state.minimum}/>
                    </div>
                </div>

                <div className="reward-input-frame">
                    <h1 className="reward-desc-title">Description *</h1>
                    <h2 className="reward-desc-body">Describe this reward in more detail.</h2>
                    <textarea 
                        className="reward-textarea form-iput reward-required"
                        placeholder="Get an early copy - hot off the presses"
                        value={this.state.description}
                        onChange={this.handleInput("description")}>
                    </textarea>
                </div>

                <div className="reward-input-frame">
                    <h1 className="reward-desc-title">Estimated delivery</h1>
                    <h2 className="reward-desc-body">Give yourself plenty of time. It's better to deliver to backers ahead of schedule than behind.</h2>
                    <div className="reward-delivery">
                        <select 
                            className="dropdown month-dropdown" 
                            value={this.state.month} 
                            onChange={this.handleInput("month")}>

                            <option disabled value="">Month</option>
                            <option value="Jan">January</option>
                            <option value="Feb">February</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sep">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </select>
                        <select 
                            id="reward-input-year"
                            className="dropdown year-dropdown" 
                            value={this.state.year} 
                            onChange={this.handleInput("year")}>
                            <option disabled value="">Year</option>
                            <option value={currYear.toString()}>{currYear}</option>
                            <option value={(currYear + 1).toString()}>{currYear + 1}</option>
                            <option value={(currYear + 2).toString()}>{currYear + 2}</option>
                            <option value={(currYear + 3).toString()}>{currYear + 3}</option>
                            <option value={(currYear + 4).toString()}>{currYear + 4}</option>
                        </select>
                    </div>
                </div>

                <div className="reward-input-frame">
                    <h1 className="reward-desc-title">Reward quantity</h1>
                    <h2 className="reward-desc-body">You may want to limit the quantity of this reward available to backers if production or shipping is difficult, time-consuming, or not scalable.</h2>
                    <input 
                        className="form-input start-input" 
                        type="number" 
                        value={this.state.quantity}
                        placeholder="Leave blank if quantity unlimited" 
                        onChange={this.handleInput("quantity")} />
                </div>

                <div className="reward-submit-container">
                    <button className="btn btn-green" 
                        type="button" 
                        onClick={
                            () => {
                                if (this.props.addReward(
                                    {
                                        project_id: this.props.projectId,
                                        title: this.state.title,
                                        description: this.state.description,
                                        minimum: this.state.minimum,
                                        quantity: this.state.quantity,
                                        estimated_delivery: this.state.month + " " + this.state.year
                                    })){
                                this.clearForm();
                                this.props.hideForm();
                                };
                            }
                        }>
                    Save reward
                    </button>
                    <p 
                        className="underlined cancel-add-reward" 
                        onClick={ () => {
                                this.clearForm();
                                this.props.hideForm();
                            }}>
                            Cancel
                    </p>
                </div>
            </div>
        );
    }



}

