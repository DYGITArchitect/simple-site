import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { timeOut } from "../../utils/mocks";

export const login = createAsyncThunk(
    "user/login",
    async (data, thunkAPI) => {
  await timeOut(1);
  setAuthLocalStore(data.username);
  return data.username;
  //return thunkAPI.rejectWithValue("DYG ERROR");
});

export const logout = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {
    await timeOut(1);
    setAuthLocalStore(null);
    return data.username;
    //return thunkAPI.rejectWithValue("DYG ERROR");
  }
);

export const userSlice = createSlice({
  name: "user/login",
  initialState: {
    id: 1,
    username: "",
    isAuth: false,
    isLoading: false,
    error: "",
  },
  reducers: {
    getAuthLocalStoreValues(state) {
      if (localStorage.getItem("username")) {
        console.log(
          `getAuthLocalStoreValues username: ${localStorage.getItem(
            "username"
          )}`
        );
        state.username = localStorage.getItem("username");
        state.isAuth = Boolean(localStorage.getItem("isAuth"));
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
      state.username = action.payload;
      console.log("login fulfilled");
    });
    builder.addCase(login.pending, (state) => {
      // state.error = "";
      // state.isAuth = true;
      // state.isLoading = true;
      console.log("login pending");
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      setAuthLocalStore(null);
      console.log("login rejected");
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = false;
      state.username = "";
      console.log("logout fulfilled");
    });
    builder.addCase(logout.pending, (state) => {
      //state.isLoading = true;
      console.log("logout pending");
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isAuth = false;
      state.username = "";
      console.log("logout rejected");
    });
  },
});

const setAuthLocalStore = (username) => {
  console.log("setAuthLocalStore: " + username);
  if (username) {
    console.log("   setAuthLocalStore set all localStorage items");
    localStorage.setItem("username", username);
    localStorage.setItem("isAuth", "true");
  } else {
    console.log("   setAuthLocalStore remove all localStorage items");
    localStorage.removeItem("username");
    localStorage.removeItem("isAuth");
  }
};

export const { getAuthLocalStoreValues } = userSlice.actions;
export default userSlice.reducer;
