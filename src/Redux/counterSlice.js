import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    isDark: JSON.parse(localStorage.getItem("changeMode2")),
    numProducts: 0 || parseInt(localStorage.getItem("numofitem")),
    showIcon: true,
    buyProduct: [] || JSON.parse(localStorage.getItem("buyProduct")),
  },
  reducers: {
    handleChangeMode: (state) => {
      localStorage.setItem("changeMode2", JSON.stringify(!state.isDark));
      state.isDark = !state.isDark;
      state.showIcon = !state.showIcon;
    },
    handleIncreaseProducts: (state, action) => {
      state.numProducts += action.payload;
      localStorage.setItem("numofitem", JSON.stringify(state.numProducts));
    },
    handleAddProduct: (state, action) => {
      state.buyProduct.push(action.payload);
      localStorage.setItem("buyProduct", JSON.stringify(state.buyProduct));
    },
    handleRemoveProduct: (state, action) => {
      const removeItem = state.buyProduct.indexOf(action.payload);
      state.buyProduct.splice(removeItem, 1);
      localStorage.setItem("buyProduct", state.buyProduct);
    },
    handelDecreaseProducts: (state, action) => {
      state.numProducts -= action.payload;
    },
  },
});

export const {
  handleChangeMode,
  handleIncreaseProducts,
  handleAddProduct,
  handleRemoveProduct,
  handelDecreaseProducts,
} = counterSlice.actions;
export default counterSlice.reducer;
