import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "unstated";
import { TaskListContainer } from "./components/task-list";
import "./store";

const App = () => (
  <Provider>
    <Router>
      <Switch>
        <Route exact path="/" component={TaskListContainer} />
        {/* <Route path="/hello" component={HelloContainer} /> */}
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
