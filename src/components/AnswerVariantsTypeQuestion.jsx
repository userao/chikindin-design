import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answersSelectors } from "../features/answers/answersSlice";
import { toggleCheck } from "../features/answers/answersSlice";
import { setAnswers } from "../features/questions/questionsSlice";

const AnswerVariantsTypeQuestion = ({ question }) => {
  const questionId = question.id;
  const answers = useSelector(answersSelectors.selectAll);
  const questionAnswers = answers.filter((answer) => answer.questionId === questionId);
  const dispatch = useDispatch();

  function handleChange(aId, isChecked, qType, qId) {
    const updateObjects = questionAnswers.reduce((acc, answer) => {
        const updateObject = {
            id: answer.id,
            changes: {}
        };
        if (qType === 'checkbox' && answer.id === aId) {
            updateObject.changes = {
                checked: !isChecked,
            }
            return [...acc, updateObject];
        } else if (qType === 'radio'){
            if (answer.id !== aId) {
                updateObject.changes = {
                    checked: false,
                }
            } else {
                updateObject.changes = {
                    checked: true,
                }
            }
            return [...acc, updateObject];
        } else {
            return acc;
        }
    }, []);
    dispatch(toggleCheck( { updateObjects } ));
    // dispatch(setAnswers({ qId }));
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
              onChange={() => handleChange(answerId, isChecked, question.type, question.id)}
            />
            <label htmlFor={`${questionId}-${answerId}`}>{answerTitle}</label>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerVariantsTypeQuestion;
