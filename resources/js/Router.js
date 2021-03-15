import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
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
                <Route path="/register" component={Register} />
                <Route path="/details" component={EntityDetails} />
            </Switch>
        </Router>,
        document.getElementById("app")
    );
}
