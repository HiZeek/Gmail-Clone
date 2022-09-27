import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});
export const { increment, decrement, incrementByAmount } = mailSlice.actions;

export const selectMail = state => state.mail.value;

export default mailSlice.reducer;
