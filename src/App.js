import React from 'react';
import QuestionList from './components/QuestionList';
import { questions } from './app/store';
import './App.css';

function App() {

    return (
        <div className="question-list__container">
           <QuestionList questions={questions} />
        </div>
    );
}

export default App;
