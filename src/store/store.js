import { configureStore } from '@reduxjs/toolkit'
import popupReducer from "./Features/popup/popupSlice"
import employeeReducer from "./Features/empolyee/employeeSlice"

const store = configureStore({
  reducer: {
    popup : popupReducer,
    employee : employeeReducer,
  },
})


export default store;