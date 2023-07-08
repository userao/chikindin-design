import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import questionsToSet from './features/questions/questionList';
import answersToSet from './features/answers/answerList';
import QuestionList from './components/QuestionList';
import './App.css';
import { questionsSelectors, setQuestions } from './features/questions/questionsSlice';
import { setAnswers } from './features/answers/answersSlice';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector(questionsSelectors.selectAll);

  useEffect(() => {
    dispatch(setQuestions(questionsToSet));
    dispatch(setAnswers(answersToSet));
  }, [dispatch]);

  return (
    <>
      {
        questions.length &&
        <div className="question-list__container">
          <QuestionList questions={questions} />
        </div>

      }
    </>
  );
}

export default App;
