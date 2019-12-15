import React from "react";
import Dropdown from "./Dropdown";
import "./FormsPage.css";
import Result from "./Result";

const userList = [
    "Steph",
    "Steve",
    "Kristy",
    "Dee",
    "Denn",
    "Megg",
    "Scotty",
    "Rene",
    "Tiff",
    "Byron",
    "Tyler"
];
let numOfPeeps = 11;
let tempArr = [];

export default class FormsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed: false,
            username: "",
            Steph: "",
            Steve: "",
            Kristy: "",
            Dee: "",
            Denn: "",
            Megg: "",
            Rene: "",
            Scotty: "",
            Tiff: "",
            Tyler: "",
            Byron: ""
        };

        this.handleUserNameChange = event => {
            this.setState({ username: event.target.value });
        };

        this.handleSubmit = async event => {
            let matchfound = false;
            event.preventDefault();
            userList.forEach(name => {
                if (this.state.username == name) {
                    alert("YAY, you got your name correct!");
                    matchfound = true;
                }
            });
            if (matchfound) {
                let answ = window.confirm(
                    "Last chance to change anything, are you sure you're finished?"
                );
                if (answ) {
                    // for (let i = 0; i < numOfPeeps; i++) {
                    tempArr.push(this.state.Steph);
                    tempArr.push(this.state.Steve);
                    tempArr.push(this.state.Kristy);
                    tempArr.push(this.state.Dee);
                    tempArr.push(this.state.Denn);
                    tempArr.push(this.state.Megg);
                    tempArr.push(this.state.Rene);
                    tempArr.push(this.state.Scotty);
                    tempArr.push(this.state.Tiff);
                    tempArr.push(this.state.Byron);
                    tempArr.push(this.state.Tyler);
                    // }
                    try {
                        let URI =
                            "https://black-rhino-api.herokuapp.com/submitList";
                        let localURI = "http://localhost:3003/submitList";
                        await fetch(URI, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                userName: this.state.username,
                                list: tempArr.toString()
                            })
                        }).then(
                            this.setState({
                                confirmed: true,
                                username: "",
                                Steph: "",
                                Steve: "",
                                Kristy: "",
                                Dee: "",
                                Denn: "",
                                Megg: "",
                                Rene: "",
                                Scotty: "",
                                Tiff: "",
                                Tyler: "",
                                Byron: ""
                            }),
                            console.log(tempArr)
                        );
                    } catch (error) {
                        alert("ERROR ::: " + error + " :::");
                    }
                } else {
                    alert("Please enter your name as appears in list");
                }
            } else {
                return;
                // alert("Finish yo shiz!");
            }
        };

        this.handleStephIdea = event => {
            // let name = event.id;
            this.setState({ Steph: event.target.value });
        };
        this.handleSteveIdea = event => {
            // let name = event.id;
            this.setState({ Steve: event.target.value });
        };
        this.handleKristyIdea = event => {
            // let name = event.id;
            this.setState({ Kristy: event.target.value });
        };
        this.handleDeeIdea = event => {
            // let name = event.id;
            this.setState({ Dee: event.target.value });
        };
        this.handleReneIdea = event => {
            // let name = event.id;
            this.setState({ Rene: event.target.value });
        };
        this.handleScottyIdea = event => {
            // let name = event.id;
            this.setState({ Scotty: event.target.value });
        };
        this.handleByronIdea = event => {
            // let name = event.id;
            this.setState({ Byron: event.target.value });
        };
        this.handleTiffIdea = event => {
            // let name = event.id;
            this.setState({ Tiff: event.target.value });
        };
        this.handleTylerIdea = event => {
            // let name = event.id;
            this.setState({ Tyler: event.target.value });
        };
        this.handleDennIdea = event => {
            // let name = event.id;
            this.setState({ Denn: event.target.value });
        };
        this.handleMeggIdea = event => {
            // let name = event.id;
            this.setState({ Megg: event.target.value });
        };
    }

    render() {
        return (
            <div className="container">
                {this.state.confirmed && (
                    <Result userName={this.state.username} />
                )}
                {/* <Dropdown /> */}
                <form onSubmit={this.handleSubmit}>
                    <div>(Who is creating this list)</div>
                    <div className="nameTag">Your name:</div>
                    <div className="card">
                        {/* <br /> */}
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleUserNameChange}
                        />
                    </div>
                    <br />
                    <br />
                    <div>
                        (Add one gift idea for each person, including one for
                        yourself) )
                    </div>
                    <div className="nameTag">Steph</div>
                    <div className="card">
                        <input
                            placeholder="idea"
                            type="text"
                            id="Steph"
                            value={this.state.Steph}
                            onChange={this.handleStephIdea}
                        />
                    </div>
                    <br />
                    <div className="nameTag">Steve</div>
                    <div className="card">
                        <input
                            placeholder="idea"
                            type="text"
                            id="Steve"
                            value={this.state.Steve}
                            onChange={this.handleSteveIdea}
                        />
                    </div>
                    <br />
                    <div className="nameTag">Kristy</div>
                    <div className="card">
                        <input
                            placeholder="idea"
                            type="text"
                            id="Kristy"
                            value={this.state.Kristy}
                            onChange={this.handleKristyIdea}
                        />
                    </div>
                    <br />
                    <div className="nameTag">Dee</div>
                    <div className="card">
                        <input
                            placeholder="idea"
                            type="text"
                            id="Dee"
                            value={this.state.Dee}
                            onChange={this.handleDeeIdea}
                        />
                    </div>
                    <br />
                    <div className="nameTag">Megg</div>
                    <div className="card">
                        <input
                            placeholder="idea"
                            type="text"
                            id="Megg"
                            value={this.state.Megg}
                            onChange={this.handleMeggIdea}
                        />
                    </div>
                    <br />
                    <div className="nameTag">Denn</div>
                    <div className="card">
                        <input
                            placeholder="idea"
                            type="text"
                            id="Denn"
                            value={this.state.Denn}
                            onChange={this.handleDennIdea}
                        />
                    </div>
                    <br />
                    <div className="nameTag">Rene</div>
                    <div className="card">
                        <input
                            placeholder="idea"
                            type="text"
                            id="Rene"
                            value={this.state.Rene}
                            onChange={this.handleReneIdea}
                        />
                    </div>
                    <br />
                    <div className="nameTag"> Scotty</div>
                    <div className="card">
                        <input
                            placeholder="idea"
                            type="text"
                            id="Scotty"
                            value={this.state.Scotty}
                            onChange={this.handleScottyIdea}
                        />
                    </div>
                    <br />
                    <div className="nameTag">Byron</div>
                    <div className="card">
                        <input
                            placeholder="idea"
                            type="text"
                            id="Byron"
                            value={this.state.Byron}
                            onChange={this.handleByronIdea}
                        />
                    </div>
                    <br />
                    <div className="nameTag">Tiff</div>
                    <div className="card">
                        <input
                            placeholder="idea"
                            type="text"
                            id="Tiff"
                            value={this.state.Tiff}
                            onChange={this.handleTiffIdea}
                        />
                    </div>
                    <br />
                    <div className="nameTag">Tyler</div>
                    <div className="card">
                        <input
                            placeholder="idea"
                            type="text"
                            id="Tyler"
                            value={this.state.Tyler}
                            onChange={this.handleTylerIdea}
                        />
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                    <br />
                    <br />
                </form>
            </div>
        );
    }
}
