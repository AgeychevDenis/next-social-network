import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalState {
   open: boolean;
}

const initialState: IModalState = {
   open: false,
};

const modalSlice = createSlice({
   name: "modal",
   initialState,
   reducers: {
      setOpen(state) {
         state.open = !state.open;
      }
   },
});

export const { setOpen } = modalSlice.actions;
export default modalSlice.reducer;