import React from "react";
import { Field, useFormikContext } from "formik";

const InputTypeQuestion = ({ question }) => {
  const { values, setFieldValue } = useFormikContext();
  const initialValue = values[question.title] ?? '';
  const [inputValue, setInputValue] = React.useState(initialValue);

  function handleChange(e) {
    setInputValue(e.target.value);
    setFieldValue(question.title, e.target.value);
  }

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
            onChange={handleChange}
            value={inputValue}
          />
        </div>
      </label>
    </div>
  );
};

export default InputTypeQuestion;
