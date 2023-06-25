import React from "react";
import Question from "./Question";

const QuestionList = ({ questions }) => {
  return (
    <>
      {questions.map((q) => (
        <Question key={q.getId()} />
      ))}
    </>
  );
};

export default QuestionList;
