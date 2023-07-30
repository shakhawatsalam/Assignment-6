import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./pcbuilder/pcbuilderSlice";

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});

export default store;
