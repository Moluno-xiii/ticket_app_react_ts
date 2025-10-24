import { useEffect, type ComponentType } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";

const withAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {
  return function AuthChecker(props: T) {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (isLoggedIn === null) return;
      if (!isLoggedIn) {
        toast.error("You need to be logged in to access this page");
        navigate({ to: "/auth/login" });
      }
    }, [isLoggedIn, navigate]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
