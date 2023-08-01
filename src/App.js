import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import questionsToSet from './features/questions/questionList';
import answersToSet from './features/answers/answerList';
import { setQuestions } from './features/questions/questionsSlice';
import { setAnswers } from './features/answers/answersSlice';

import Home from './pages/Home';
import Questionary from './pages/Questionary';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuestions(questionsToSet));
    dispatch(setAnswers(answersToSet));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questionary' element={<Questionary />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
