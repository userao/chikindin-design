import React from "react";
import Question from "./Question";

const QuestionList = ({ questions }) => {
  return (
    <form className="question-list">
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </form>
  );
};

export default QuestionList;
