import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Register from "./pages/auth/Register";
import EntitySubmit from "./pages/entities/EntitySubmit";
import EntityDetails from "./pages/entities/EntityDetails";
import Home from "./pages/home/Home";
import MapPage from "./pages/map/MapPage";

if (document.getElementById("app")) {
    ReactDOM.render(
        <Router>
            <TopNav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/map" component={MapPage} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/register" component={Register} />
                <Route path="/submit" component={EntitySubmit} />
                <Route path="/details" component={EntityDetails} />
            </Switch>
        </Router>,
        document.getElementById("app")
    );
}
