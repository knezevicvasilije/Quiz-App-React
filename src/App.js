import ReactDOM from "react-dom";
import React from "react";
import "./assets/style.css";

export default class QuizBee extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title">DevLab Quiz</div>
      </div>
    );
  }
}
ReactDOM.render(<QuizBee />, document.getElementById("root"));
