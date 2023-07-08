import React from "react";
import { Field, useFormikContext } from "formik";

const InputTypeQuestion = ({ question }) => {
  const currentValue = useFormikContext().values[question.title];

  return (
    <div className="question">
      <label>
        <p className="question__title">{question.title}</p>
        {question.additiveInfo && (
          <p className="question__additive-info">{question.additiveInfo}</p>
        )}
        <div className="question__input-container">
          <Field
            id={`question-${question.id}`}
            name={question.title}
            type="text"
            value={currentValue}
          />
        </div>
      </label>
    </div>
  );
};

export default InputTypeQuestion;
