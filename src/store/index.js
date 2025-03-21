import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import fileReducer from "../features/file/fileSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    file: fileReducer,
  },
});

export default store;
