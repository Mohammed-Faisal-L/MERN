import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      let searchId = action.payload.id;
      let exists = state.items.some((item) => item.id === searchId);

      if (!exists) state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      const itemIdToDelete = action.payload;
      const index = state.items.findIndex((item) => item.id === itemIdToDelete);
      if (index !== -1) state.items.splice(index, 1);
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
