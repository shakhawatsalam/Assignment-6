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
      state.monitor = action.monitor;
    },
  },
});
