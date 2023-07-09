import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const answersAdapter = createEntityAdapter();

const initialState = answersAdapter.getInitialState();

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswers: answersAdapter.setAll,
  }
});

export const answersSelectors = answersAdapter.getSelectors((state) => state.answers)
export const { setAnswers } = answersSlice.actions;
export default answersSlice.reducer;