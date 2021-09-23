import React, { useState, useEffect } from "react";


const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => { },
  onLogIn: () => { }
});

export default AuthContext;

export const AuthContextProvider = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('isLoggedIn');
    if (data === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  }

  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', '1');
  }

  return <AuthContext.Provider
    value={{
      isLoggedIn: isLoggedIn,
      onLogin: loginHandler,
      onLogout: logoutHandler
    }}
  >
    {props.children}
  </AuthContext.Provider>
}
