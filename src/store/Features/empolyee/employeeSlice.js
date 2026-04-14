import { createSlice } from "@reduxjs/toolkit";
import {
  deleteEmployees,
  editEmployees,
  getEmployees,
  postEmployees,
} from "./employee.thunk";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getEmployees.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
      state.loading = false;
    });
    builder.addCase(getEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // post employee
    builder.addCase(postEmployees.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postEmployees.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(postEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // delete employee
    
    // update employee
    builder.addCase(editEmployees.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editEmployees.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(editEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default employeeSlice.reducer;
