import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../features/questions/questionsSlice';
import answersReducer from '../features/answers/answersSlice';
import { questionsSelectors } from '../features/questions/questionsSlice';
import { answersSelectors } from '../features/answers/answersSlice';

export const store = configureStore({
    reducer: {
        questions: questionsReducer,
        answers: answersReducer,
    },
});

export const answers = answersSelectors.selectAll(store.getState());
export const questions = questionsSelectors.selectAll(store.getState());