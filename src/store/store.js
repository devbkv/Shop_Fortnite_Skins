import { configureStore } from '@reduxjs/toolkit';

import paginationSlice from '../features/pagination/paginationSlice';
import itemsSlice from '../features/items/itemsSlice';
import searchSlice from '../features/search/searchSlice';
import modalSlice from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    items: itemsSlice,
    search: searchSlice,
    modal: modalSlice,
  },
});
