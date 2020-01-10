import React from "react"

export default class PledgeLevel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(){
        event.preventDefault();
        console.log("yooo")
    }
    
    handleInput(event) {
        this.setState({
            value: event.currentTarget.value
        });
    }

    render(){
        return (
        <li>
            <div className="pledge-level-content-box">
                <h1>Pledge ${this.props.level.minimum} or more</h1>
                <h2>{this.props.level.title}</h2>
                <p>{this.props.level.description}</p>
                <div className="level-extra-info">
                    <span>ESTIMATED DELIVERY</span>
                    <time>{this.props.level.deliveryDate}</time>
                    <span>SHIPS TO</span>
                    <span>Anywhere in the world</span>
                </div>
                <p>Limited ({this.props.level.quantity - this.props.level.count} of {this.props.level.quantity})</p>
                <p>{this.props.level.count} backers</p>
                <form onSubmit={this.handleSubmit}>
                    <label className="input-pledge">Pledge amount
                        <span>$</span>
                        <input
                            type="number"
                            min={this.props.level.miminum}
                            value={this.state.value}
                            onChange={this.handleInput}>
                        </input>
                    </label>
                    <button type="submit">Continue</button>
                </form>

            </div>
        </li>)
    }
}