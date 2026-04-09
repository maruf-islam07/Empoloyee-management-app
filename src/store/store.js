import { configureStore } from '@reduxjs/toolkit'
import popupReducer from "./Features/popup/popupSlice"

const store = configureStore({
  reducer: {
    popup : popupReducer,
  },
})


export default store;