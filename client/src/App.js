import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import staff from "./Components/Staff/Staff";
import home from "./Components/Home/Home";
import admin from "./Components/Admin/Admin";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/staff" component={staff} />
          <Route path="/admin/:path" component={admin} />
          <Route path="/admin" component={admin} />

          <Route path="/" component={home} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
