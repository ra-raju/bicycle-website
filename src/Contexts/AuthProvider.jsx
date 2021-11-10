import React, { createContext } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
