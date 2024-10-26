import { createSlice } from "@reduxjs/toolkit";

const appStateSlice = createSlice({
    name: "appStates",
    initialState: {
        showSideBar: false,
    },
    reducers: {
        toggleSideBar: (state, action) => {
            state.showSideBar = !state.showSideBar;
        }
    }
});

export const { toggleSideBar } = appStateSlice.actions;
export default appStateSlice.reducer;