import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext)
    throw new Error("Auth context was used outdside of its scope");
  return authContext;
};
export default useAuth;
