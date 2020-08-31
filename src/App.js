import React, { Component } from "react";
import "./App.css";
import DataService from "./service/service";
import LayoutApp from "./components/LayoutApp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      login: false,
      store: null,
      showLayout: false,
    };
  }

  getComponent() {
    if (this.state.showLayout) {
      return <LayoutApp />;
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.storeCollector();
  }
  storeCollector() {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store && store.login) {
      this.setState({ login: true, store: store });
    }
  }

  login() {
    //fetch(DataService.checkAuthorization(), {
    fetch("http://localhost:8080/authenticate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((response) => {
      response.json().then((result) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            store: result,
          })
        );
        this.storeCollector();
      });
    });
  }

  post() {
    let token = "Bearer " + this.state.store.token;
    //fetch(DataService.checkbaseResponse(), {
    fetch("http://localhost:8080/response", {
      method: "GET",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(this.state.post),
    }).then((response) => {
      response.json().then((result) => {
        this.setState({
          response: result.message,
          showLayout: !this.state.showLayout,
        });
        console.log(response);
      });
    });
  }

  render() {
    return (
      <form>
        <div className="App">
          {!this.state.login ? (
            <div>
              <div class="container">
                <label for="uname">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                  onChange={(event) =>
                    this.setState({ username: event.target.value })
                  }
                />

                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />

                <button
                  type="submit"
                  onClick={() => {
                    this.login();
                  }}
                >
                  Login
                </button>
                <label>
                  <input type="checkbox" checked="checked" name="remember" />{" "}
                  Remember me
                </label>
              </div>

              <div class="container" style={{ backgroundColor: "f1f1f1" }}>
                <button type="button" class="cancelbtn">
                  Cancel
                </button>
                <span class="psw">
                  Forgot <a href="#">password?</a>
                </span>
              </div>
            </div>
          ) : (
            <div>
              <button
                className="post-btn"
                onClick={() => {
                  this.post();
                }}
              >
                Click Me !
              </button>{" "}
              {this.getComponent}
            </div>
          )}
        </div>
      </form>
    );
  }
}
export default App;
