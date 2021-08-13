import logo from "./logo.svg";
import "./App.css";
import { signIn } from "./graphsample";
import { Redirect, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homepage from "./homepage";

function App() {
  let history = useHistory();

  const sayHello = async () => {
    alert("Hello!");
    const result = await signIn("17013606455", "J2global!12");
    alert(JSON.stringify(result));
    history.push("/home");
  };

  return (
    <Router>
      <Route exact path="/home" component={homepage} />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={sayHello}>Click me!</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
