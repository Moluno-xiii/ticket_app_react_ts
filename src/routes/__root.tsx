import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import { Toaster } from "react-hot-toast";
import AuthProvider from "../context/AuthContext";
import TicketProvider from "../context/TicketContext";

const RootLayout = () => (
  <AuthProvider>
    <TicketProvider>
      <div className="bg-[url('/wave1.svg')] min-h-dvh flex font-poppins bg-center bg-cover bg-no-repeat bg-cream px-2 py-2 md:px-6 md:py-4">
        <Toaster />
        <div className="flex  min-h-full  flex-col max-w-[1440px] mx-auto  w-full">
          <Header />
          <main className="flex-1 flex mt-5 md:mt-7">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </TicketProvider>
  </AuthProvider>
);

export const Route = createRootRoute({ component: RootLayout });
