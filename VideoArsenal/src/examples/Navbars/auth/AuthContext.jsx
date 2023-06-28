import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(determineIfLoggedIn());

  function determineIfLoggedIn() {
    if (sessionStorage.getItem("token") !== null) {
      return true;
    } else {
      return false;
    }
  }

  return <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
