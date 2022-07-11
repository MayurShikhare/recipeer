import { createSlice } from "@reduxjs/toolkit";
// import data from '../../foodItem.json'

const foodItemSlice = createSlice({
  name:"foodItems",
  initialState:{
    items : []
  },
  reducers:{
    get_foodItems(state) {
      // state.items = data
    },
    set_foodItems(state, action){
      const foodData = action.payload
      state.items =  foodData
    }
  }
})

export const {get_foodItems, set_foodItems} = foodItemSlice.actions
// export const {get_foodItems} = foodItemSlice.actions

export default foodItemSlice.reducer