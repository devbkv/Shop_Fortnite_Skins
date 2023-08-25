import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentItems: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setCurrentItems: (state, action) => {
      state.currentItems = action.payload;
    },
  },
});

export const { setItems, setCurrentItems } = itemsSlice.actions;
export default itemsSlice.reducer;
