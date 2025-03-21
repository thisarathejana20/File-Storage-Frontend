import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { uploadFileToCloud } from "@/services/file";

export const uploadFile = createAsyncThunk(
  "files/upload",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await uploadFileToCloud(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);

const fileSlice = createSlice({
  name: "files",
  initialState: {
    files: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = false;
        state.files.push(action.payload);
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default fileSlice.reducer;
