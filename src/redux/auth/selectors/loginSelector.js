export const getLoginState = (state) =>
  state?.login || {
    id: 1,
    username: "",
    isAuth: false,
    isLoading: false,
    error: "",
  };
