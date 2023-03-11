import React , {useState} from "react";

export const authContext = React.createContext({
    token : '',
  isLoggend: false,
  role:'',
  login: (token,role) => {},
  logout: () => {},
});
const isLogged = localStorage.getItem("userToken");
const AuthContextProvider = (props) => {
  const [token, setToken] = useState(isLogged); 
  const [role, setRole] = useState( localStorage.getItem("role")); 
  const isUserLogged = !!token;

  const loginHandler = (token,role) => {
    setToken(token);
    localStorage.setItem("userToken", token);
    setRole(role)
    localStorage.setItem("role", role);

  };
  
  const logoutHandler = () => {
    setToken(null);
    setRole(null)
    localStorage.removeItem("userToken");
    localStorage.removeItem("role");
  };

  const contextValue = {
    token: token,
    role:role,
    isLoggend: isUserLogged,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <authContext.Provider value={contextValue}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

