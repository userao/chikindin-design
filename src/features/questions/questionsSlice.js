import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const questionsAdapter = createEntityAdapter();

const initialState = questionsAdapter.getInitialState();

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuestions: questionsAdapter.setAll,
    }
});

export const questionsSelectors = questionsAdapter.getSelectors((state) => state.questions)
export const { setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
