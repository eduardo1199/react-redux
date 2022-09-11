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
