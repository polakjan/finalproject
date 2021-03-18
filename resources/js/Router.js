import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Register from "./pages/auth/Register";
import EntityDetails from "./pages/entities/EntityDetails";
import Home from "./pages/home/Home";
import MapPage from "./pages/map/MapPage";

// export const UserContext = React.createContext(null);

// if (document.getElementById("app")) {
//     const [api_token, setApiToken] = useState(
//         localStorage.getItem("api_token")
//     );
//     const [user, setUser] = useState(null);

//     const setToken = (token) => {
//         setApiToken(token);

//         localStorage.setItem("api_token", token);
//     };
//     const loadCurrentUser = async () => {
//         console.log("Loading current user information");

//         const response = await fetch("/api/user", {
//             headers: {
//                 Accept: "application/json",
//                 "Content-type": "application/json",
//                 Authorization: `Bearer ${api_token}`,
//             },
//         });

//         const data = await response.json();

//         setUser(data.user);

//         console.log("user data", data.user);
//     };
//     useEffect(() => {
//         if (api_token) {
//             loadCurrentUser();
//         }
//     }, [api_token]);

// <UserContext.Provider value={user}>
// </UserContext.Provider>
ReactDOM.render(
    <Router>
        <TopNav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/map" component={MapPage} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/details" component={EntityDetails} />
        </Switch>
    </Router>,
    document.getElementById("app")
);
