import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pcBuild: {
    monitor: null,
    ram: null,
    motherBoard: null,
    processor: null,
    powerSupply: null,
    storageDevice: null,
  },
  buildPc: false,
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addMonitor: (state, action) => {
      if (action.payload.category === "Monitor") {
        state.pcBuild.monitor = action.payload;
      } else if (action.payload.category === "RAM") {
        state.pcBuild.ram = action.payload;
      } else if (action.payload.category === "Motherboard") {
        state.pcBuild.motherBoard = action.payload;
      } else if (action.payload.category === "Processor") {
        state.pcBuild.processor = action.payload;
      } else if (action.payload.category === "PowerSupply") {
        state.pcBuild.powerSupply = action.payload;
      } else if (action.payload.category === "StorageDevice") {
        state.pcBuild.storageDevice = action.payload;
      }

      if (
        state.pcBuild.monitor &&
        state.pcBuild.ram &&
        state.pcBuild.motherBoard &&
        state.pcBuild.processor &&
        state.pcBuild.powerSupply &&
        state.pcBuild.storageDevice
      ) {
        state.buildPc = true;
      } else {
        state.buildPc = false;
      }

      // state.monitor.push({ ...action.payload });
    },
  },
});

export const { addMonitor, addRam } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
