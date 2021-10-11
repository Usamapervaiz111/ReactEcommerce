import React from "react";
import { BrowserRouter as Router,Route,Switch  } from "react-router-dom";
import Master from "./layouts/admin/Master";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
       <Route path="/admin"  component={Master} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
