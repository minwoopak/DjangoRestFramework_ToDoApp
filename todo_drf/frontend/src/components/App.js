import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div id="task-container">

          <div id="form-wrapper">
            <form id="form">
              <div className="flex-wrapper">
                <div style={{ flex: 6 }}>
                  <input
                    className="form-control"
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Add task.."
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <input
                    id="submit"
                    className="btn btn-warning"
                    type="submit"
                    name="Add"
                  />
                </div>
              </div>
            </form>
          </div>

          <div id="list-wrapper"></div>

        </div>
      </div>
    );
  }
}

console.log("Hello from React");

const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(<App />, appDiv);
