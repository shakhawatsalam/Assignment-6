import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monitor: null,
  ram: null,
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addMonitor: (state, action) => {
      state.monitor = action.payload;
      // state.monitor.push({ ...action.payload });
    },
  },
});

export const { addMonitor } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
