import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";
import { LogoutModal } from "../../routes/dashboard/route";
import Button from "./Button";
import Icon from "./Icon";
import MobileSideBar from "./MobileSidebar";
import type { LinkType } from "../../types";

const headerLinks: LinkType[] = [
  {
    name: "Dashboard",
    route: "/dashboard/",
  },
  {
    name: "Tickets",
    route: "/tickets",
  },
];

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="border-primary z-50 shadow-xl font-grotesk border sticky flex flex-row justify-between items-center top-4 rounded-lg  px-4 py-3 bg-cream">
      <Link
        to="/"
        className="[&.active]:font-bold [&.active]:text-xl  hover:underline  transition-all duration-300 p-2   text-primary rounded-md"
      >
        Home
      </Link>
      {isLoggedIn ? (
        <>
          <ul className="hidden sm:flex flex-row gap-x-5 justify-between items-center">
            {headerLinks.map((link) => (
              <HeaderNavLink link={link} key={link.route} />
            ))}
          </ul>
          <Button
            title="Logout"
            variant="error"
            onClick={() => setIsLogoutModalOpen(true)}
            additionalStyles="hidden sm:flex"
          />
          <Icon
            icon={CiMenuFries}
            onClick={() => setIsNavOpen(true)}
            className="sm:hidden"
            color="var(--color-primary)"
          />
          {isNavOpen ? (
            <MobileSideBar
              close={() => setIsNavOpen(false)}
              openLogoutModal={() => setIsLogoutModalOpen(true)}
            />
          ) : null}
          {isLogoutModalOpen ? (
            <LogoutModal
              closeModal={() => setIsLogoutModalOpen(false)}
              logout={() => {
                logout();
                setIsLogoutModalOpen(false);
              }}
            />
          ) : null}
        </>
      ) : null}
    </header>
  );
};

export default Header;

const HeaderNavLink = ({ link }: { link: LinkType }) => {
  return (
    <li>
      <Link
        to={link.route}
        className="[&.active]:font-bold [&.active]:text-xl  hover:underline  transition-all duration-300 p-2  bg- text-primary rounded-md"
      >
        {link.name}
      </Link>{" "}
    </li>
  );
};
