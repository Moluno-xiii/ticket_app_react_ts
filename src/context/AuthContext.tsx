import { createContext, useState, useEffect, type ReactNode } from "react";
import { getLocalStorageItem } from "../utils";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

type AuthContextTypes = {
  isLoggedIn: boolean | null;
  login: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextTypes>({
  isLoggedIn: false,
  login: () => {},
  signUp: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionToken = localStorage.getItem("ticketapp_session");
    if (sessionToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const login = (email: string, password: string) => {
    const userCredentials = getLocalStorageItem<{
      email: string;
      password: string;
    }>("user_credentials");

    if (
      userCredentials?.email !== email ||
      userCredentials.password !== password
    ) {
      toast.error("Incorrect credentials, try again!");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Login successful");
    localStorage.setItem("ticketapp_session", crypto.randomUUID() + Date.now());
    navigate({ to: "/dashboard" });
  };

  const signUp = (email: string, password: string) => {
    // check if user already exists in local storage
    const existingUser = getLocalStorageItem<{
      email: string;
      password: string;
    }>("user_credentials");

    if (existingUser?.email.toLowerCase() === email.toLowerCase()) {
      toast.error("User already exists, use a different email!");
      return;
    }

    localStorage.setItem(
      "user_credentials",
      JSON.stringify({ email, password })
    );
    toast.success("Sign up successful!");
    navigate({ to: "/auth/login" });
  };

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate({ to: "/auth/login" });
    toast.success("Log out successful!");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
