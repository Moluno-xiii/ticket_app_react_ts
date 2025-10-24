import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import { Toaster } from "react-hot-toast";

const RootLayout = () => (
  <div className="flex flex-col bg-[url('wave1.svg')] bg-center bg-cover bg-no-repeat min-h-dvh bg-lighter">
    <Toaster />
    <Header />
    <main className="flex-1 ">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
