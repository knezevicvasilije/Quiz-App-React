import ReactDOM from "react-dom";
import React from "react";
import "./assets/style.css";
import quizService from "./quizService";

export default class QuizBee extends React.Component {
  state = {
    questionBank: []
  };
  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question
      });
    });
  };
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="title">DevLab Quiz</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => <h4>{question}</h4>
          )}
      </div>
    );
  }
}
ReactDOM.render(<QuizBee />, document.getElementById("root"));
