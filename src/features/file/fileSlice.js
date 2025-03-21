import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    addFile: (state, action) => {
      state.files.push(action.payload);
    },
  },
});

export const { setFiles, addFile } = fileSlice.actions;

export default fileSlice.reducer;
