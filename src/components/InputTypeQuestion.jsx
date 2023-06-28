import React from "react";
import { useDispatch } from "react-redux";
import { setAnswer } from "../features/questions/questionsSlice";

const InputTypeQuestion = ({ question }) => {
    const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(setAnswer({id: question.id, answer: e.target.value}))
  }

  return (
    <div className="question">
      <label>
        <p className="question__title">{question.title}</p>
        {question.additiveInfo && (
          <p className="question__additive-info">{question.additiveInfo}</p>
        )}
        <div className="question__input-container">
          <input type="text" onChange={handleChange} />
        </div>
      </label>
    </div>
  );
};

export default InputTypeQuestion;
