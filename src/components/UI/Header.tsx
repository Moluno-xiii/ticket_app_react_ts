import { Link } from "@tanstack/react-router";
import useAuth from "../../hooks/useAuth";
import Button from "./Button";

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  console.log(
    "islogged in",
    isLoggedIn === true ? "logged in" : "not logged in"
  );
  return (
    <header className="border-primary border sticky top-4 rounded-lg  px-4 py-3 bg-cream">
      <ul className="flex flex-row justify-between items-center">
        <li>
          <Link
            to="/"
            className="[&.active]:font-bold p-2 font-macondo bg-primary text-white rounded-md"
          >
            Home
          </Link>{" "}
        </li>
        {isLoggedIn && (
          <li>
            <Button title="Logout" variant="error" onClick={logout} />
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
