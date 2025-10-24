import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import DashboardSidebar from "../../components/DashBoardSidebar";
import withAuth from "../../components/others/withAuth";
import Button from "../../components/UI/Button";
import useAuth from "../../hooks/useAuth";

export const Route = createFileRoute("/dashboard")({
  component: withAuth(RouteComponent),
});

function RouteComponent() {
  const { logout } = useAuth();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <div className="grid grid-cols-[200px_1fr] gap-5 w-full">
      <DashboardSidebar openModal={() => setIsLogoutModalOpen(true)} />
      <main className="">
        <Outlet />
      </main>
      {isLogoutModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-cream text-white rounded-md shadow-xl p-6 w-[90%] max-w-sm">
            <p className="text-lg font-semibold mb-4 text-center text-black">
              Are you sure you want to logout?
            </p>
            <div className="flex flex-row gap-x-4 justify-center items-center">
              <Button title="Yes" variant="error" onClick={logout} />
              <Button title="No" onClick={() => setIsLogoutModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
