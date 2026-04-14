import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";

export const getEmployees = createAsyncThunk(
  "empolyee/getEmployees",

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/employees");
      return data;
    } catch (error) {
      return rejectWithValue("Something went Wrong");
    }
  },
);


export const postEmployees = createAsyncThunk(
  "employee/postEmployee",

  async (details, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post("/employees", details);
      dispatch(getEmployees());
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);


export const deleteEmployees = createAsyncThunk(
  "employee/deleteEmployee",

  async (id, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.delete(`employees/${id}`);
      dispatch(getEmployees());
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);


export const editEmployees = createAsyncThunk(
  "employee/deleteEmployee",

  async ({id, details}, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.put(`employees/${id}`, details);
      dispatch(getEmployees());
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);
