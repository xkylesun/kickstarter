import React from "react"

const FootBar = () => {
    return (
        <div className="footbar">
            <div className="foot-icon-container">
                <a target="_blank" href="https://github.com/xkylesun">
                    <img className="foot-icon" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/xingyu-kyle-sun-576ab089">
                    <img className="foot-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"/>
                </a>
            </div>
            <div className="foot-credit">
                <p>Kyle Sun</p>
                <p>© 2020 Jumpstarter, NSC (No Such Company)</p>
            </div>
        </div>
    )
}

export default FootBar;