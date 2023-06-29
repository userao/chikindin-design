import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const answersAdapter = createEntityAdapter();

const initialState = {
    ids: [0, 1, 2, 3, 4],
    entities: {
        0: {
            id: 0,
            questionId: 2,
            title: 'С согласованием',
            checked: false,
        },
        1: {
            id: 1,
            questionId: 2,
            title: 'Без согласования',
            checked: false,
        },
        2: {
            id: 2,
            questionId: 3,
            title: 'Диван',
            checked: false,
        },
        3: {
            id: 3,
            questionId: 3,
            title: 'Кофейный столик',
            checked: false,
        },
        4: {
            id: 4,
            questionId: 3,
            title: 'Шкаф',
            checked: false,
        },
    }
};

const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        toggleCheck: (state, { payload }) => {
            const { updateObjects } = payload;
            answersAdapter.updateMany(state, updateObjects)
        }
    }
});

export const answersSelectors = answersAdapter.getSelectors((state) => state.answers)
export const { toggleCheck } = answersSlice.actions;
export default answersSlice.reducer;