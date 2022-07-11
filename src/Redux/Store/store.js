import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import foodItemReducer from '../FoodItem/foodItemSlice'
import {mySaga} from "../../Sagas";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer:{
    foodItems : foodItemReducer
  },
middleware:[...getDefaultMiddleware({thunk:false}), sagaMiddleware]
})
sagaMiddleware.run(mySaga)

export default store