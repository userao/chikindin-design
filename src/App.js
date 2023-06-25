import React from 'react';
import QuestionList from './components/QuestionList';
import questionList from './features/questions/questionsList';
import './App.css';

function App() {

    return (
        <div>
           <QuestionList questions={questionList} />
        </div>
    );
}

export default App;
