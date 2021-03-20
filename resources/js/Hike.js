import React, { createContext, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
} from "react-router-dom";
import TopNav from "./components/TopNav";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Register from "./pages/auth/Register";
import EntitySubmit from "./pages/entities/EntitySubmit";
import EntityDetails from "./pages/entities/EntityDetails";
import Home from "./pages/home/Home";
import MapPage from "./pages/map/MapPage";

export const UserContext = createContext(null);

const Hike = () => {
    const [user, setUser] = useState(null);

    const loadCurrentUser = async () => {
        console.log("Loading current user information");
        const response = await fetch("/api/user", {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
        });
        const data = await response.json();
        setUser(data);
    };
    useEffect(() => {
        loadCurrentUser();
    }, []);

    return (
        <Router>
            <UserContext.Provider value={user}>
                <TopNav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/map" component={MapPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/register" component={Register} />
                    <Route path="/submit" component={EntitySubmit} />
                    <Route path="/details/:id" component={EntityDetails} />
                </Switch>
            </UserContext.Provider>
        </Router>
    );
};

export default Hike;
