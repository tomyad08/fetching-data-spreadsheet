import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    makanan: [],
    minuman: [],
    cemilan: [],
    orders: [],
    final: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload);
    },
    addMakanan: (state, action) => {
      state.makanan.push(action.payload);
    },
    addMinuman: (state, action) => {
      state.minuman.push(action.payload);
    },
    addCemilan: (state, action) => {
      state.cemilan.push(action.payload);
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
export const { addProducts, addOrders, addMakanan, addMinuman, addCemilan } =
  productSlice.actions;

export default productSlice.reducer;
