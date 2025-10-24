import { createFileRoute, useNavigate } from "@tanstack/react-router";
import Button from "../components/UI/Button";
import useAuth from "../hooks/useAuth";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-y-2">
      <h2 className="text-3xl md:text-4xl">Welcome to Taskify</h2>
      <p className="font-poppins italic">
        Your number one platform for managing tickets
      </p>

      {isLoggedIn ? (
        <Button
          title="Continue"
          onClick={() => navigate({ to: "/dashboard" })}
        />
      ) : (
        <Button
          title="Get Started"
          onClick={() => navigate({ to: "/auth/signup" })}
        />
      )}
    </div>
  );
}

// Landing page
// - Apps name with a catch description and cta buttons (login, and get started)
// - hero section that must include a wavy background via svg or css clip path.
// - include decoratave circles, at least one in the hero, and box shaped sections for features or content with shadows and rounded corners.
// - entire app must have a max width of 1440px centred on larger screens.
// - fully responsive layout
// - consistent footer section accross all pages
