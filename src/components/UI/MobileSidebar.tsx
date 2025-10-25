import { Link } from "@tanstack/react-router";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import Icon from "./Icon";
import type { LinkType } from "../../types";

const navs: LinkType[] = [
  {
    name: "Dashboard",
    route: "/dashboard/overview",
  },
  {
    name: "Settings",
    route: "/dashboard/settings",
  },
  {
    name: "Tickets",
    route: "/tickets",
  },
];

const MobileSideBar = ({
  close,
  openLogoutModal,
}: {
  close: () => void;
  openLogoutModal: () => void;
}) => {
  return (
    <nav className="bg-cream drop-shadow-md rounded-md border flex sm:hidden flex-col gap-y-5 z-20 min-w-[200px] border-primary p-3 fixed left-3 bottom-3 top-24">
      <Icon
        icon={IoClose}
        onClick={close}
        className="self-end text-red-500 cursor-pointer"
      />
      <ul className="flex flex-col gap-y-5 text-center flex-1">
        {navs.map((link) => (
          <NavLink link={link} close={close} key={link.route} />
        ))}
      </ul>
      <Button title="Logout" variant="error" onClick={openLogoutModal} />
    </nav>
  );
};

export default MobileSideBar;

const NavLink = ({ link, close }: { link: LinkType; close: () => void }) => {
  return (
    <li onClick={close}>
      <Link
        to={link.route}
        className="[&.active]:font-bold   hover:underline  transition-all duration-300 p-2 bg-cream border-primary border text-dark [&.active]:text-white [&.active]:bg-primary rounded-md block w-full"
      >
        {link.name}
      </Link>{" "}
    </li>
  );
};
