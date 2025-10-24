import { Link } from "@tanstack/react-router";
// import useAuth from "../../hooks/useAuth";
import Button from "./Button";
import githubUsername from "github-username";

const Header: React.FC = () => {
  // const { isLoggedIn, logout } = useAuth();
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
        <li>
          <Button onClick={getUserName} title="Get uusername" />
        </li>
        {/* {isLoggedIn && (
          <li>
            <Button title="Logout" variant="error" onClick={logout} />
          </li>
        )} */}
      </ul>
    </header>
  );
};

export default Header;

const getUserName = async () => {
  try {
    console.log("fetching....");
    const request = await githubUsername("kingeasyemmanuel86@gmail.com");
    console.log("request data", request);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("fetch ended");
  }
};
