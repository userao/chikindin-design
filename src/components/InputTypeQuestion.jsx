import React from "react";

const InputTypeQuestion = ({ question }) => {
  return (
    <div class="question">
      <label>
        <p class="question__title">{question.getTitle()}</p>
        <div className="question__input-container">
            <input type="text" />
        </div>
      </label>
    </div>
  );
};

export default InputTypeQuestion;
