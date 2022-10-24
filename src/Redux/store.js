import { configureStore } from "@reduxjs/toolkit";
import modulosReducer from "./features/modulosSlice";

export default configureStore({
  reducer: {
    modulos: modulosReducer,
  },
});
