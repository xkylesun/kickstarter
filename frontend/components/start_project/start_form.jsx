import React from "react";
import { Link } from 'react-router-dom';


export default class StartForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            subtitle: "",
            body: ""
        }
    };

    handleInput(stateName){
        // console.log(this.state)
        return event => {
            this.setState({ [stateName]: event.currentTarget.value});
        }
    }

    handleClick(divId1, divId2){
        return () => {
            document.getElementById(divId1).classList.add("hidden");
            document.getElementById(divId2).classList.remove("hidden");
        }
    }

    render() {
        return (
            <div>
                <div id="project-basics">
                    <h1>Start with the basics</h1>
                    <h2>Make it easy for people to learn about your project.</h2>
                    <div>
                        <span>
                            <h2>Project title</h2>
                            <h3>Write a clear, brief title that helps people quickly understand the gist of your project.</h3>
                        </span>
                        <span>
                            <label>Title
                                <input type="text" />
                            </label>
                            <label>Subtitle
                                <input type="text" />
                            </label>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h2>Project category</h2>
                            <h3>Choose the category that most closely aligns with your project.</h3>
                            <h3>Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory.</h3>
                            <h3>You’ll be able to change the category and subcategory even after your project is live.</h3>
                        </span>
                        <span>
                            <select defaultValue="0" onChange={this.handleInput("category", "one")}>
                                <option disabled value="0">Select car:</option>
                                <option value="Art">Art</option>
                                <option value="Comics">Comics</option>
                                <option value="Design">Design</option>
                                <option value="Games">Games</option>
                                <option value="Technology">Technology</option>
                            </select>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h2>Project image</h2>
                            <h3>Add an image that clearly represents your project.</h3>
                            <h3>Choose one that looks good at different sizes. It will appear in different sizes in different places: on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.</h3>
                            <h3>You may want to avoid including banners, badges, and text because they may not be legible at smaller sizes.</h3>
                            <h3>Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.</h3>            
                        </span>
                        <span>
                            <form action="">
                                <input type="file" name="pic" accept="image/*" />
                                <input type="submit" />
                            </form>
                        </span>
                    </div>

                    <div>
                        <span>
                            <h2>Campaign duration</h2>
                            <h3>Set a time limit for your campaign. You won’t be able to change this after you launch.</h3>
                        </span>
                        <span>
                            <p>End on a specific date &amp; time</p>
                                <input type="datetime-local" name="" id="" />
                        </span>
                    <button type="button" onClick={this.handleClick}>Next: Reward</button>
                    </div>
                </div>

                <div className="project-rewards hidden">
                    <h1>Add your rewards</h1>
                    <h2>Offer simple, meaningful rewards that bring backers closer to your project. Rewards don’t have to be physical items. Consider special experiences or behind-the-scenes peeks into your project.</h2>

                    <form action="">
                        <label >Pledge amount
                            Set a minimum pledge amount for this reward.
                            <input type="number" name="" id=""/>
                        </label>
                        <label >Description
                            Describe this reward in more detail.
                            <input type="text" name="" id=""/>
                        </label>
                        <label >Estimated delivery
                            Give yourself plenty of time. It's better to deliver to backers ahead of schedule than behind.
                            <input type="month" name="" id=""/>
                            <select defaultValue="0" onChange={this.handleInput("category", "one")}>
                                <option disabled value="0">Year</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                            </select> 
                        </label>
                        <section>
                            <h2>Add reward items</h2>
                            <h3>Briefly list and describe each item included in this reward.</h3>
                            <button type="submit">Add an item</button>
                        </section>
                    </form>
                </div>


                <div className="project-story hidden">
                    <h1>Introduce your project</h1>
                    <h2>Tell people why they should be excited about your project. Get specific but be clear and be brief.</h2>
                    <div>
                        <h2>Project description</h2>
                        <h3>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your project is all about and what rewards look like.</h3>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Write about your project like you're explaining it to a friend"></textarea>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}