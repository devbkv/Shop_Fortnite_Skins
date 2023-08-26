import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
  },
});

export const { setModalOpen } = modalSlice.actions;
export default modalSlice.reducer;
