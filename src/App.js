import React from 'react';
import QuestionList from './components/QuestionList';
import './App.css';
import { questionsSelectors } from './features/questions/questionsSlice';
import { answersSelectors } from './features/answers/answersSlice';
import { useSelector } from 'react-redux';

function App() {
    const questions = useSelector(questionsSelectors.selectAll);

    return (
        <div className="question-list__container">
           <QuestionList questions={questions} />
        </div>
    );
}

export default App;
