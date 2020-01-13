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
            <div className="pledge-level-item-frame">
                <div className="pledge-info-container">
                    <h1 className="level-amount">Pledge ${this.props.level.minimum} or more</h1>
                    <h2 className="level-title">{this.props.level.title}</h2>
                    <p className="level-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolores atque, qui esse enim in doloremque, nisi, soluta maiores incidunt at? Facere sequi animi labore nihil minus. Repellat, molestias minima?{this.props.level.description}</p>
                    <div className="level-extra-info">
                        <span className="level-delivery-title">ESTIMATED DELIVERY</span>
                        <p className="level-delivery-date">{this.props.level.deliveryDate}</p>
                    </div>
                    <p className="level-remaining">Limited ({this.props.level.quantity - this.props.level.count} of {this.props.level.quantity})</p>
                    <p className="level-backer-count">{this.props.level.count} backers</p>
                </div>
                <div className="pledge-form-container">
                    <form>
                    <p className="pledge-input-label">Pledge amount</p>
                        <span className="pledge-currency">$</span>
                        <input
                            className="pledge-input"
                            type="number"
                            min={this.props.level.miminum}
                            value={this.state.value}
                            onChange={this.handleInput}>
                        </input>
                    
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
                            <button 
                                className="btn btn-green" 
                                id="plege-form-btn"
                                type="button">Continue</button>
                        </Link>
                    </form>
                </div>
            </div>
        </li>)
    }
}