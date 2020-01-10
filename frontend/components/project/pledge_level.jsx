import React from "react";
import { Link } from 'react-router-dom';

export default class PledgeLevel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: this.props.level.minimum
        }
        this.handleInput = this.handleInput.bind(this);
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
                <form>
                    <label className="input-pledge">Pledge amount
                        <span>$</span>
                        <input
                            type="number"
                            min={this.props.level.miminum}
                            value={this.state.value}
                            onChange={this.handleInput}>
                        </input>
                    </label>
                        <Link 
                        to={{
                            pathname: `/checkouts/${this.props.level.id}/payments`,
                            state: {
                                title: this.props.level.title,
                                minimum: this.props.level.minimum,
                                value: this.state.value
                            }
                        }}
                        >
                            <button type="button">Continue</button>
                        </Link>
                </form>

            </div>
        </li>)
    }
}