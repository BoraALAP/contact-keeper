import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = () => {
    dispatch({ type: LOGIN_SUCCESS });
  };

  // Register User
  const registerUser = () => {
    dispatch({ type: REGISTER_SUCCESS });
  };

  // Login User
  const loginUser = () => {
    dispatch({ type: LOGIN_SUCCESS });
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  // Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <authContext.Provider
      value={{
        token:state.token,
        loading: state.loading,
        error: state.error,
        user: state.user,
        isAuthenticated :state.isAuthenticated,
        loadUser,
        registerUser,
        loginUser,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
