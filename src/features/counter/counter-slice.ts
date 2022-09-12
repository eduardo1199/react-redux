import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //increment
    increment(state) {
      // its okay to do this because immer makes it immutable
      // under the hood
      state.value++;
    },
    // decrement
    decrement(state) {
      state.value--;
    },
    // reset
    reset(state) {
      state.value = 0;
    }
  }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;

