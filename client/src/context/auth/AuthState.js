import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import axios from "axios";

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
import setAuthToken from "../../utils/setAuthToken";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  // Load User
  const loadUser = async (formData) => {
    
    if(localStorage.token){
      setAuthToken(localStorage.token)
    }
    try {
      const res = await axios.get("/api/auth", formData, config);
      
      
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({type: AUTH_ERROR, payload:error})
    }
  };

  // Register User
  const register = async formData => {
    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });

      loadUser()
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    }
  };

  // Login User
  const login = async formData => {
    try {
      const res = await axios.post("/api/auth", formData, config);      
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      loadUser()
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    }
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
        token: state.token,
        loading: state.loading,
        error: state.error,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loadUser,
        register,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
