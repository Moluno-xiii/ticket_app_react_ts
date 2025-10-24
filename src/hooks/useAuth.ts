// import { useNavigate } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// const useAuth = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const sessionToken = localStorage.getItem("ticketapp_session");
//     if (sessionToken) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const updateLoginSTate = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   const login = (email: string, password: string) => {
//     const userCredentials = getLocalStorageItem<{
//       email: string;
//       password: string;
//     }>("user_credentials");

//     if (
//       userCredentials?.email !== email ||
//       userCredentials.password !== password
//     ) {
//       toast.error("Incorrect credentials, try again!");
//       return;
//     }
//     setIsLoggedIn(true);
//     toast.success("Login successful");
//     localStorage.setItem("ticketapp_session", crypto.randomUUID() + Date.now());
//     navigate({ to: "/dashboard" });
//   };

//   const signUp = (email: string, password: string) => {
//     // check if user already exists in local storage
//     const existingUser = getLocalStorageItem<{
//       email: string;
//       password: string;
//     }>("user_credentials");

//     if (existingUser?.email.toLowerCase() === email.toLowerCase()) {
//       toast.error("User already exists, use a different email!");
//       return;
//     }

//     localStorage.setItem(
//       "user_credentials",
//       JSON.stringify({ email, password })
//     );
//     toast.success("Sign up successful!");
//     navigate({ to: "/auth/login" });
//   };

//   const logout = () => {
//     localStorage.removeItem("ticketapp_session");
//     toast.success("Logged out successfully");
//     setIsLoggedIn(false);
//     navigate({ to: "/" });
//   };

//   return { isLoggedIn, login, logout, signUp, updateLoginSTate };
// };

// export default useAuth;

// const getLocalStorageItem = <T>(key: string): T | null => {
//   const item = localStorage.getItem(key);
//   return item ? JSON.parse(item) : null;
// };

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext)
    throw new Error("Auth context was used outdside of its scope");
  return authContext;
};
export default useAuth;
