import React from "react";
import { Link } from 'react-router-dom';
import { fetchRandom } from "../../utils/project_util";

export default class CatchAll extends React.Component {
    constructor(props){
        super(props);
    };

    redirectRandom() {
        fetchRandom().then(
            result => {
                this.props.history.push(`/projects/${result.id}`)
            }
        )
    }

    render() {
        return (
            <div className="catch-all-frame">
                <div className="catch-all-content">
                    <h1 className="catch-all-title">Back it up!</h1>
                    <p className="catch-all-sub">We can’t find this page, but we can show you a new creative project you can help bring to life.</p>
                    <div className="catch-all-btn-container">
                        <div><button className="btn btn-black btn-random" id="catch-all-chance-btn" onClick={this.redirectRandom.bind(this)}>Take a chance</button></div>
                        <Link to="/"><button className="btn btn-white" id="catch-all-home-btn">Take me home</button></Link>
                    </div>
                </div>
                <div className="image-container">
                    <img className="catch-all-image" src={"https://ksr-static.imgix.net/Mobile_opt.png?ixlib=rb-1.1.0&fm=pjpg&s=f1304b333127d739c919a7f81bff55a2"} />
                </div>
            </div>
        );
    };
}
