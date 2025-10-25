import { createContext, useState, useEffect, type ReactNode } from "react";
import { getLocalStorageItem } from "../utils";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

type AuthContextTypes = {
  isLoggedIn: boolean | null;
  login: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  logout: () => void;
  userDetails: { name: string } | undefined;
  updateUserDetails: (name: string) => void;
};

const AuthContext = createContext<AuthContextTypes>({
  isLoggedIn: false,
  login: () => {},
  signUp: () => {},
  logout: () => {},
  userDetails: { name: "" },
  updateUserDetails: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [userDetails, setUserDetails] = useState<{ name: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const jsonUserDetails = localStorage.getItem("userDetails");
    if (jsonUserDetails === undefined || jsonUserDetails === null) return;

    const parsedUserDetails = JSON.parse(jsonUserDetails);
    setUserDetails(parsedUserDetails);
  }, []);

  useEffect(() => {
    const sessionToken = localStorage.getItem("ticketapp_session");
    if (sessionToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (!userDetails) return;
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

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
    navigate({ to: "/dashboard/overview" });
  };

  const signUp = (email: string, password: string) => {
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

  const updateUserDetails = (name: string) => {
    // localStorage.setItem("userDetails", JSON.stringify({ name }));
    setUserDetails({ name });
    toast.success("User details updated successfully!");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        signUp,
        updateUserDetails,
        userDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
