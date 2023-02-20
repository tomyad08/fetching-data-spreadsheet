import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    orders: [],
    final: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload);
    },
    addOrders: (state, action) => {
      let arr = state.orders;
      arr.push(action.payload);
      const uniqueArr = [...new Set(arr)];
      state.orders = uniqueArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProducts, addOrders } = productSlice.actions;

export default productSlice.reducer;
