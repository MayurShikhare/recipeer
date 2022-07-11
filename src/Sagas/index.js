// import axios from "axios"
import {takeLatest, call, put} from "redux-saga/effects"
import { get_foodItems, set_foodItems } from "../Redux/FoodItem/foodItemSlice"
// import { get_foodItems } from "../Redux/FoodItem/foodItemSlice"

// make an API call via AXIOS
const fetchFoodItems = () => {
  return (
    fetch('http://localhost:8000/food')
    .then(resp => resp.json())
  )
  
}

function* handleGetFoodItems() {
  try {
    // Fetch the data from API
    const response = yield call (fetchFoodItems)
    // console.log(response)
    const data = response
    yield put(set_foodItems({...data}))
  } catch (error) {
    console.log(error)
  }
}

export function* mySaga() {
  yield takeLatest(get_foodItems.type, handleGetFoodItems)
}