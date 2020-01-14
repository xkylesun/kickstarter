import React from "react";

export default class RewardForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: "",
            minimum: 1,
            quantity: 0,
            month: "",
            year: "",
        }
    }

    handleInput(stateName) {
        return event => {
            this.setState({ [stateName]: event.currentTarget.value });
        }
    }

    render(){
        return (
            <div className="reward=form-frame">
                <div className="reward-title-frame">
                    <h1 className="reward-item-title">Title</h1>
                    <h2 className="reward-item-desc">Briefly describe this reward.</h2>
                    <input type="text" placeholder="Signed limited-edition" onChange={this.handleInput("title")}/>
                </div>
                <div className="reward-amount-frame">
                    <h1 className="reward-item-title">Pledge amount</h1>
                    <h2 className="reward-item-desc">Set a minimum pledge amount for this reward.</h2>
                    <input type="number" onChange={this.handleInput("minimum")} value={this.state.minimum}/>
                </div>
                <div className="reward-desc-frame">
                    <h1 className="reward-item-title">Description</h1>
                    <h2 className="reward-item-desc">Describe this reward in more detail.</h2>
                    <input type="text" placeholder="Get an early copy - hot off the presses" onChange={this.handleInput("description")}/>
                </div>

                <div className="reward-delivery-frame">
                    <h1 className="reward-item-title">Estimated delivery</h1>
                    <h2 className="reward-item-desc">Give yourself plenty of time. It's better to deliver to backers ahead of schedule than behind.</h2>
                    <div className="reward-delivery">
                        <select defaultValue="0" onChange={this.handleInput("month")}>
                            <option disabled value="0">Month</option>
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
                        <select defaultValue="0" onChange={this.handleInput("year")}>
                            <option disabled value="0">Year</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>
                    <div className="reward-quantity-frame">
                        <h1 className="reward-item-title">Reward quantity</h1>
                        <h2 className="reward-item-desc">You may want to limit the quantity of this reward available to backers if production or shipping is difficult, time-consuming, or not scalable.</h2>
                        <input type="number" placeholder="Leave blank if quantity unlimited" onChange={this.handleInput("quantity")} />
                    </div>
                </div>
                <div>
                    <h2>Add reward items</h2>
                    <h3>Briefly list and describe each item included in this reward.</h3>
                    <button className="btn btn-black" 
                        type="button" 
                        onClick={
                            () => this.props.addReward(
                                {
                                    title: this.state.title,
                                    description: this.state.description,
                                    minimum: this.state.minimum,
                                    quantity: this.state.quanitty,
                                    estimated_delivery: this.state.month + " " + this.state.year
                                })
                        }>
                    + Add an item
                    </button>
                </div>
            </div>
        );
    }



}

