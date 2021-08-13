import logo from "./logo.svg";
import "./App.css";
import { signIn } from "./graphsample";
import { Redirect, useHistory } from "react-router-dom";

function homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HOME PAGE YEEEEEE
        </a>
      </header>
    </div>
  );
}

export default homepage;
