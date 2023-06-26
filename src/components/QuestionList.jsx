import React from "react";
import Question from "./Question";

const QuestionList = ({ questions }) => {
  return (
    <form class="question-list">
      {questions.map((question) => (
        <Question key={question.getId()} question={question} />
      ))}
    </form>
  );
};

export default QuestionList;
