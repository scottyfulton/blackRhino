import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HelloPage from "./HelloPage";
import FormsPage from "./FormsPage";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <div>
                    <h1>Happy Black Rhinoceros Christmas Game</h1>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li>
                                <Link to={"/"} className="nav-link">
                                    Home{" "}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/forms"} className="nav-link">
                                    Lists
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <br />
                    <Switch>
                        <Route exact path="/" component={HelloPage} />
                        <Route path="/forms" component={FormsPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default NavBar;
