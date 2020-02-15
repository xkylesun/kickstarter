import React from "react";

export default class RewardItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        var header = <div className="reward-list-menu ist">
                        <p className="cell-first">PLEDGE AMOUNT</p>
                        <p className="cell-second">DETAILS</p>
                    </div>

        return (
            <div className="reward-list-frame">
                {this.props.idx === 0 ? header : null}
                <div className="reward-list-item-frame">
                    <div className="reward-list-data list">
                        <p className="cell-first">${this.props.reward.minimum}</p>
                        <div className="cell-second">
                            <p className="list-reward-title">{this.props.reward.title}</p>
                            <p className="list-delivery">Estimated delivery: {this.props.reward.estimatedDelivery}</p>
                        </div>
                    </div>
                    <div className="reward-list-bottom">
                        <button className="btn-delete" onClick={() => this.props.removeReward(this.props.reward.id) }>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}