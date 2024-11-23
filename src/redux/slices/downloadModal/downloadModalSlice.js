import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openDownloadModal: false,
};

const downloadModalSlice = createSlice({
  name: "downloadModal",
  initialState,
  reducers: {
    handleDownloadModal:(state,action)=>{
        state.openDownloadModal = action.payload;
    }
  },
});

export const {
    handleDownloadModal
} = downloadModalSlice.actions;
export default downloadModalSlice.reducer;
