import { Link } from "@tanstack/react-router";
import Button from "./UI/Button";
import { CiLogout } from "react-icons/ci";

const DashboardSidebar = ({ openModal }: { openModal: () => void }) => {
  return (
    <nav
      style={{ zIndex: 1 }}
      className="bg-cream font-inter drop-shadow-xl border border-primary rounded-md p-3 hidden sm:flex z-2 flex-col"
    >
      <ul className="flex flex-col gap-y-4 w-full flex-1">
        <li className="w-full">
          <Link
            to="/dashboard/overview"
            className="[&.active]:font-bold [&.active]:bg-cream [&.active]:border-primary [&.active]:border [&.active]:text-primary p-2  bg-primary text-white rounded-md block hover:bg-primary/40 transition-all duration-300 "
          >
            Overview
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/settings"
            className="[&.active]:font-bold [&.active]:bg-cream [&.active]:border-primary [&.active]:border [&.active]:text-primary p-2  bg-primary text-white rounded-md block hover:bg-primary/80 transition-all duration-300 "
          >
            Settings
          </Link>{" "}
        </li>
      </ul>
      <Button
        onClick={openModal}
        title="Logout"
        icon={CiLogout}
        iconColor="red"
      />
    </nav>
  );
};

export default DashboardSidebar;
