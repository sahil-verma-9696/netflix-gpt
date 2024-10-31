import { createSlice } from "@reduxjs/toolkit";

const appStateSlice = createSlice({
  name: "appStates",
  initialState: {
    showSideBar: false,
    showWatchListForm: false,
    showWatchListPopup: false,
  },
  reducers: {
    toggleSideBar: (state, action) => {
      state.showSideBar = !state.showSideBar;
    },
    toggleWatchListForm: (state, action) => {
      state.showWatchListForm = !state.showWatchListForm;
    },
    toggleWatchListPopup: (state, action) => {
      state.showWatchListPopup = !state.showWatchListPopup;
    },
  },
});

export const { toggleSideBar, toggleWatchListForm, toggleWatchListPopup } =
  appStateSlice.actions;
export default appStateSlice.reducer;
