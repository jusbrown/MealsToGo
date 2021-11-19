import React, { createContext, useState } from "react";
import * as firebase from "firebase";
import { loginRequest, registerRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    if (!email || !password) {
      setError("Error: You must provide a email and password.");
      return;
    }

    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
      })
      .catch((e) => setError(e.toString()))
      .finally(() => setIsLoading(false));
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Password and Password Confirm must match!");
      return;
    }

    setIsLoading(true);
    registerRequest(email, password)
      .then((u) => {
        setUser(u);
      })
      .catch((e) => setError(e.toString()))
      .finally(() => setIsLoading(false));
  };

  const onLogout = () => {
    setUser(null);
    firebase.auth().signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuthenticated: !!user,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
