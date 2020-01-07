import React from "react";
import { Link } from 'react-router-dom';


const CatchAll = () => {
    return (
        <div>
            <img src={"https://ksr-static.imgix.net/Mobile_opt.png?ixlib=rb-1.1.0&fm=pjpg&s=f1304b333127d739c919a7f81bff55a2"} />
            <h1>Back it up!</h1>
            <p>We can’t find this page, but we can show you a new creative project you can help bring to life.</p>
            <Link to="/"><button>Take a chance</button></Link>
            <Link to="/"><button>Take me home</button></Link>
        </div>)
}

export default CatchAll;