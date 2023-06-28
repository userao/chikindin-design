import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const questionsAdapter = createEntityAdapter();

const initialState = questionsAdapter.getInitialState({
    ids: [0, 1, 2, 3],
    entities: {
        0: {
            id: 0,
            type: 'input',
            title: 'Ваше имя',
            additiveInfo: 'Дополнительная информация',
            answers: [],
        },
        1: {
            id: 1,
            type: 'input',
            title: 'Ваш почтовый адрес',
            additiveInfo: null,
            answers: [],
        },
        2: {
            id: 2,
            type: 'radio',
            title: 'Согласование перепланировки',
            additiveInfo: null,
            answers: [],
        },
        3: {
            id: 3,
            type: 'checkbox',
            title: 'Мебель для гостиной',
            additiveInfo: null,
            answers: [],
        }
    }
});

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setAnswer: (state, { payload }) => {
            const { id, answer } = payload;
            const updateObject = {
                id,
                changes: {
                    answer
                },
            }
            questionsAdapter.updateOne(state, updateObject);
        },
    }
});

export const questionsSelectors = questionsAdapter.getSelectors((state) => state.questions)
export const { setAnswer } = questionsSlice.actions;
export default questionsSlice.reducer;