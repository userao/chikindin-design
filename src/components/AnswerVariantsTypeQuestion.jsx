import React from "react";
import { useDispatch } from "react-redux";
import { answers } from "../app/store";
import { toggleCheck } from "../features/answers/answersSlice";

const AnswerVariantsTypeQuestion = ({ question }) => {
  const questionId = question.id;
  const questionAnswers = answers.filter((answer) => answer.questionId === questionId);
  const dispatch = useDispatch();

  function handleChange(aId, qType) {
    // const newAnswers = questionAnswers.map((answer) => {
    //     if (qType === 'radio') {
    //         if (aId === answer.id) {
    //             answer.checked = true;
    //         } else {
    //             answer.checked = false;
    //         }
    //     } else {
    //         if (aId === answer.id) {
    //             answer.checked = !answer.checked;
    //         }
    //     }
    // });

    dispatch(toggleCheck());
  }

  return (
    <div className="question">
      <p className="question__title">{question.title}</p>
      {question.additiveInfo && <p className="question__additive-info">{question.additiveInfo}</p>}
      {questionAnswers.map((answer) => {
        const { id: answerId, checked: isChecked, title: answerTitle } = answer;

        return (
          <div className="question__input-container" key={answerId}>
            <input
              id={`${questionId}-${answerId}`}
              type={question.type}
              checked={isChecked}
              onChange={() => handleChange(answerId, question.type)}
            />
            <label htmlFor={`${questionId}-${answerId}`}>{answerTitle}</label>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerVariantsTypeQuestion;
