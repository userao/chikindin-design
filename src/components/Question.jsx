import React from "react";
import AnswerVariantsTypeQuestion from "./AnswerVariantsTypeQuestion";
import InputTypeQuestion from "./InputTypeQuestion";

const Question = ({ question }) => {
  const getQuestionElementsByType = (type) => {
    const mapping = {
      input: () => <InputTypeQuestion question={question} />,
      radio: () => <AnswerVariantsTypeQuestion question={question} />,
      checkbox: () => <AnswerVariantsTypeQuestion question={question} />,
    };

    return mapping[type];
  };

  const QuestionElement = getQuestionElementsByType(question.type);

  return (
    <>
      <QuestionElement />
    </>
  );
};

export default Question;
