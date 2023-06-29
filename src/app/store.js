import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../features/questions/questionsSlice';
import answersReducer from '../features/answers/answersSlice';

export const store = configureStore({
    reducer: {
        questions: questionsReducer,
        answers: answersReducer,
    },
});
