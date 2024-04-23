import { createSlice } from "@reduxjs/toolkit";

/*const initialState = {
  restaurant: null,
};*/

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: null,
  reducers: {
    setRestaurant(state, action) {
      state.push({ restaurant: action.payload });
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
