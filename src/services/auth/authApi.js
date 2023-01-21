import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { timeOut } from "../../utils/mocks";

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  console.log("createAsyncThunk start");
  await timeOut(1);
  console.log("createAsyncThunk end");
  return data.username;
  //return thunkAPI.rejectWithValue("DYG ERROR");
});

export const userSlice = createSlice({
  name: "user/login",
  initialState: {
    id: 1,
    username: "test",
    isAuth: false,
    isLoading: false,
    error: "",
  },
  reducers: {
    getAuthLocalStoreValues(state) {
      console.log(state);
      state.username = localStorage.getItem("username");
      state.isAuth = Boolean(localStorage.getItem("username"));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action);
      console.log(state);
      state.isLoading = false;
      state.error = "";
      setAuthLocalStore(action.payload);
      console.log("fulfilled");
    });
    builder.addCase(login.pending, (state) => {
      state.error = "";
      state.isLoading = true;
      console.log("pending");
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      setAuthLocalStore(null);
      console.log("rejected");
    });
  },
});

const setAuthLocalStore = (username) => {
  if (username) {
    localStorage.setItem("username", username);
    localStorage.setItem("isAuth", "true");
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("isAuth");
  }
};

export const { getAuthLocalStoreValues } = userSlice.actions;
export default userSlice.reducer;
