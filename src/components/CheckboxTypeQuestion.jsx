import React from "react";

const CheckboxTypeQuestion = ({ question }) => {
  const answerVariants = question.getAnswerVariants();

  return (
    <div class="question">
      <p className="question__title">{question.getTitle()}</p>
      {answerVariants.map((answer) => {
        return (
          <div className="question__input-container">
            <input id={`${question.getId()}-${answer.getId()}`} type="checkbox" />
            <label htmlFor={`${question.getId()}-${answer.getId()}`}>
              {answer.getDescription()}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxTypeQuestion;
