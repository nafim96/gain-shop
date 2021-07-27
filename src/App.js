import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import PrivateRoute from "./components/Authentication/PrivateRouter/PrivateRouter";
import { createContext, useState } from "react";

const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <PrivateRoute path="/home">
            <Home />
          </PrivateRoute> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
